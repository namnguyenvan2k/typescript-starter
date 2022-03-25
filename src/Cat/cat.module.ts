import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [CatsService],
})
export class CatsModule {}
