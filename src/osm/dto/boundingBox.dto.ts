import { Location } from 'src/shared/dto/location.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class BoundingBoxDto {
  @ApiProperty({
    description: 'Left bottom',
    type: Location,
  })
  @Type(() => Location)
  x: Location

  @ApiProperty({
    description: 'Right top',
    type: Location,
  })
  @Type(() => Location)
  y: Location
}