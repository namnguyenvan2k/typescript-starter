import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from '../cat.controller';
import { CatsService } from '../cat.service';
import { CreateCatDto } from '../dto';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    })
      // .overrideProvider(CatsService)
      // .useValue(mockCatService)
      .compile();
    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user record and return', async () => {
    expect(await service.create({} as CreateCatDto));
  });
});
