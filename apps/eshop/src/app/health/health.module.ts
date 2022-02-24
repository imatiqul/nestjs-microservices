import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { CatalogModule } from '../catalog/catalog.module';
import { HealthController } from './health.controller';

@Module({
  imports: [TerminusModule, CatalogModule],
  controllers: [HealthController],
  providers: []
})
export class HealthModule {}
