import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatsController } from './Cat/cat.controller';
import { LoggerMiddleware } from './Cat/middleware/logger.middleware';
import { CatsModule } from './Cat/cat.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './Guard';
import { HttpExceptionFilter } from './helper/exception.filter';

@Module({
  imports: [CatsModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(CatsController);
  }
}
