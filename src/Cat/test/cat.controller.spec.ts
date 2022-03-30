import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from '../cat.controller';
import { CatsService } from '../cat.service';
import { CreateCatDto } from '../dto';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    })
      // .overrideProvider(CatsService)
      // .useValue(mockCatService)
      .compile();
    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a cat', () => {
    expect(controller.create({} as CreateCatDto));
  });

  it('should findAll cats', () => {
    expect(controller.findAll());
  });
});
