import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatsController } from './Cat/cat.controller';
import { LoggerMiddleware } from './Cat/middleware/logger.middleware';
import { CatsModule } from './Cat/cat.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './Guard';
import { HttpExceptionFilter } from './helper/exception.filter';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CatsModule, MongooseModule.forRoot('mongodb://localhost:27017')],
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
