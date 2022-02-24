import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { CatalogModule } from './catalog/catalog.module';
import { BasketModule } from './basket/basket.module';
import { OrderingModule } from './ordering/ordering.module';
import { PaymentModule } from './payment/payment.module';
import { RouterModule } from '@nestjs/core';

import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { ActiveHandlesMetric, ControllerInjector, EventEmitterInjector, GuardInjector, HttpRequestDurationSeconds, LoggerInjector, OpenTelemetryModule, PipeInjector, ScheduleInjector } from '@metinseylan/nestjs-opentelemetry';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { HealthModule } from './health/health.module';
import { CommonModule } from '@demo/common';

@Module({
  imports: [
    CommonModule,
    HealthModule,
    CatalogModule, BasketModule, OrderingModule, PaymentModule,
    RouterModule.register([
      {
        path: 'catalogs',
        module: CatalogModule,
      },
    ]),
    OpenTelemetryModule.forRoot({
      traceAutoInjectors: [
        ControllerInjector,
        GuardInjector,
        EventEmitterInjector,
        ScheduleInjector,
        PipeInjector,
        LoggerInjector,
      ],
      metricAutoObservers: [
        HttpRequestDurationSeconds.build({
          boundaries: [20, 30, 100],
        }),
        ActiveHandlesMetric,
      ],
      metricExporter: new PrometheusExporter({
        endpoint: 'metrics',
        port: 9464,
      }),
      metricInterval: 1000,
      spanProcessor: new SimpleSpanProcessor(
        new ZipkinExporter({
          url: '//localhost:9411/zipkin/',
        })
      ),
    })
  ],
  providers: [AppService],
})
export class AppModule {}
