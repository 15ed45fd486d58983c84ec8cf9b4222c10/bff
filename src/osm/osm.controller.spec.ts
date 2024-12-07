import { Test, TestingModule } from '@nestjs/testing';
import { OsmController } from './osm.controller';
import { OsmService } from './osm.service';

describe('OsmController', () => {
  let controller: OsmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OsmController],
      providers: [OsmService],
    }).compile();

    controller = module.get<OsmController>(OsmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
