import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CatsModule } from '../src/Cat/cat.module';
import { CreateCatDto } from '../src/Cat/dto';

describe('CatsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [CatsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/cat')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect([] as CreateCatDto[]);
  });
  it('/ (POST)', () => {
    return request(app.getHttpServer()).post('/cat').expect(204);
  });
});
