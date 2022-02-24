import { CustomApiException } from '@demo/common';
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCatalogCommand } from '../../commands/create-catalog.command';
import { CatalogBrandModel } from '../../models/catalog-brand.model';

@ApiBearerAuth()
@ApiTags('Catalogs')
@Controller({
  path: `/catalog`,
  version: '1'
})
export class CatalogController {

  private readonly logger = new Logger(CatalogController.name);

  constructor(private commandBus: CommandBus) {

  }

  @Get('brands')
  @ApiOperation({ summary: 'Get Catalog Brands' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 200,
    description: 'Catalog Brands',
    type: [CatalogBrandModel]
  })
  async CatalogBrandsAsync(): Promise<CatalogBrandModel[]> {
    this.logger.log('CatalogBrandsAsync');
    const brands: CatalogBrandModel[] = [];

    brands.push({ id: 1, name: '1ABC' });
    brands.push({ id: 2, name: '2ABC' });
    brands.push({ id: 3, name: '3ABC' });
    brands.push({ id: 4, name: '4ABC' });

    return brands;
  }

  @Get('exception')
  @ApiOperation({ summary: 'Exception' })
  @ApiResponse({ status: 500, description: 'CustomApiException' })
  @ApiResponse({
    status: 200,
    description: 'No Exception',
    type: Boolean
  })
  async ExceptionAsync(): Promise<boolean> {
    this.logger.log('ExceptionAsync');
    throw new CustomApiException('CustomApiException from ExceptionAsync');
    return true;
  }

  @Post()
  @ApiOperation({ summary: 'Create Catalog' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({
    status: 201,
    description: 'Created Catalog Successfully',
    type: Boolean
  })
  async CreateCatalogAsync(@Body() createCatalogCommand: CreateCatalogCommand): Promise<boolean> {
    this.logger.log(`createCatalogCommand instanceof CreateCatalogCommand: ${createCatalogCommand instanceof CreateCatalogCommand}`) // true
    return this.commandBus.execute(createCatalogCommand);
  }
}
