/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { GlobalExceptionFilter } from '@demo/common';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JsonLoggerService, RequestLogger, RequestLoggerOptions } from 'json-logger-service';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  // or "app.enableVersioning()"
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle('Nestjs Microservices')
    .setDescription('The Nestjs Microservices API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const sendInternalServerErrorCause = false;
  const logAllErrors = true;
  const globalExceptionFilter = new GlobalExceptionFilter(sendInternalServerErrorCause, logAllErrors);
  app.useGlobalFilters(globalExceptionFilter);

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
