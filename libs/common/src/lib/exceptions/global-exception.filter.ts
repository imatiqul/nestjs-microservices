
import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { v1 as uuidv1 } from 'uuid';
import { CustomApiException } from './custom-api-exception';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private static extractCustomApiException(error: any): string {
    if (!(error instanceof CustomApiException)) {
      return undefined;
    }

    if (!error.causeError) {
      return undefined;
    }

    if (error.causeError instanceof String) {
      return error.causeError as string;
    }

    if (!error.causeError.message && !error.causeError.response) {
      return undefined;
    }

    const integrationErrorDetails = {
      message: error.causeError.message,
      details: error.causeError.response && error.causeError.response.data,
    };
    return JSON.stringify({ causeError: integrationErrorDetails });
  }

  private logger = new Logger(GlobalExceptionFilter.name);

  public constructor(private readonly sendClientInternalServerErrorCause: boolean = false,
    private readonly logAllErrors: boolean = false,
    private readonly logErrorsWithStatusCode: number[] = []) {
  }

  public catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const responseStatus = exception.status ? exception.status : HttpStatus.INTERNAL_SERVER_ERROR;
    const messageObject = this.getBackwardsCompatibleMessageObject(exception, responseStatus);
    let errorId = undefined;
    let customApiException = undefined;

    if (responseStatus === HttpStatus.INTERNAL_SERVER_ERROR) {
      errorId = uuidv1();
      customApiException = GlobalExceptionFilter.extractCustomApiException(exception);

      this.logger.error({
        errorId: errorId,
        route: request.url,
        customApiException: customApiException,
        stack: exception.stack && JSON.stringify(exception.stack, ['stack'], 4),
      }, messageObject);
    } else if (this.logAllErrors || this.logErrorsWithStatusCode.indexOf(responseStatus) !== -1) {
      this.logger.error({
        route: request.url,
        stack: exception.stack && JSON.stringify(exception.stack),
      }, messageObject);
    }

    response
      .status(responseStatus)
      .json({
        errorId: errorId,
        message: this.getClientResponseMessage(responseStatus, exception),
        integrationErrorDetails: responseStatus === HttpStatus.INTERNAL_SERVER_ERROR && this.sendClientInternalServerErrorCause ? customApiException : undefined,
      });
  }

  private getClientResponseMessage(responseStatus: number, exception: any): any {
    if (responseStatus !== HttpStatus.INTERNAL_SERVER_ERROR
      || (responseStatus === HttpStatus.INTERNAL_SERVER_ERROR && this.sendClientInternalServerErrorCause)) {
      return this.getBackwardsCompatibleMessageObject(exception, responseStatus);
    }

    return 'Internal server error.';
  }

  private getBackwardsCompatibleMessageObject(exception: any, responseStatus: number): any {
    const errorResponse = exception.response;
    if (errorResponse && errorResponse.error) {
      return { error: errorResponse.error, message: errorResponse.message, statusCode: responseStatus };
    }
    return { error: exception.message, statusCode: responseStatus };
  }
}