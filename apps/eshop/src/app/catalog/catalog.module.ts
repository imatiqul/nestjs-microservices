import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CatalogHealthIndicator } from './catalog.health';
import { CatalogController } from './controllers/catalog/catalog.controller';
import { CreateCatalogHandler } from './handlers/create-catalog.handler';

export const CommandHandlers = [CreateCatalogHandler];

@Module({
  imports: [CqrsModule],
  controllers: [CatalogController],
  providers: [CatalogHealthIndicator,
    ...CommandHandlers],
  exports: [CatalogHealthIndicator]
})
export class CatalogModule { }
