import { Controller, Post, Body } from '@nestjs/common';
import { TwoGisService } from './two-gis.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetLayersRequestDto } from 'src/two-gis/dto/getLayersRequest.dto';

@ApiTags('2Gis')
@Controller('two-gis')
export class TwoGisController {
  constructor(private readonly twoGisService: TwoGisService) {}

  @Post()
  @ApiOperation({ summary: 'Get map layers' })
  @ApiOkResponse()
  async getLayers(@Body() getLayersRequestDto: GetLayersRequestDto): Promise<any> {
    return this.twoGisService.getLayers(getLayersRequestDto);
  }
}
