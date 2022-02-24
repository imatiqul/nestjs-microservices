import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { Controller, Get } from '@nestjs/common';
import { CatalogHealthIndicator } from '../catalog/catalog.health';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private catalogHealthIndicator: CatalogHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      async () => this.catalogHealthIndicator.isHealthy('catalog'),
    ])
  }
}
