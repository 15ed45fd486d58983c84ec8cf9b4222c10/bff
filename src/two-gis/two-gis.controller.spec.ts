import { Test, TestingModule } from '@nestjs/testing';
import { TwoGisController } from './two-gis.controller';
import { TwoGisService } from './two-gis.service';

describe('TwoGisController', () => {
  let controller: TwoGisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwoGisController],
      providers: [TwoGisService],
    }).compile();

    controller = module.get<TwoGisController>(TwoGisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
