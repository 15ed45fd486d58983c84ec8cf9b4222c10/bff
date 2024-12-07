import { Body, Controller, Post } from '@nestjs/common';
import { OsmService } from './osm.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BoundingBoxDto } from 'src/osm/dto/boundingBox.dto';

@ApiTags('OSM')
@Controller('osm')
export class OsmController {
  constructor(private readonly osmService: OsmService) {}

  @Post("/getRoads")
  @ApiOperation({ summary: 'Get roads' })
  @ApiOkResponse()
  async getRoads(@Body() boundingBoxDto: BoundingBoxDto): Promise<any> {
    return this.osmService.getRoads(boundingBoxDto);
  }

  @Post("/getTrafficSignals")
  @ApiOperation({ summary: 'Get traffic signals' })
  @ApiOkResponse()
  async getTrafficSignals(@Body() boundingBoxDto: BoundingBoxDto): Promise<any> {
    return this.osmService.getTrafficSignals(boundingBoxDto);
  }
}
