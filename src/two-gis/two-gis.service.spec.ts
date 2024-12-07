import { Test, TestingModule } from '@nestjs/testing';
import { TwoGisService } from './two-gis.service';

describe('TwoGisService', () => {
  let service: TwoGisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwoGisService],
    }).compile();

    service = module.get<TwoGisService>(TwoGisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
