import { Module } from '@nestjs/common';
import { TwoGisService } from './two-gis.service';
import { TwoGisController } from './two-gis.controller';

@Module({
  controllers: [TwoGisController],
  providers: [TwoGisService],
})
export class TwoGisModule {}
