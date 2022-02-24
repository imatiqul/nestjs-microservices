import { Injectable } from '@nestjs/common';

import {
  HealthIndicatorResult,
  HealthIndicator,
  HealthCheckError,
} from '@nestjs/terminus';

@Injectable()
export class CatalogHealthIndicator extends HealthIndicator {
  constructor() {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    const badboys = [];
    const isHealthy = true;

    const result = this.getStatus(key, isHealthy, { badboys: badboys.length });

    if (isHealthy) {
      return result;
    }

    throw new HealthCheckError('Catalogcheck failed', result);
  }
}