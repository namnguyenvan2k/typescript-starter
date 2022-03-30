import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';
import { Cat, CatSchema } from './schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
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
