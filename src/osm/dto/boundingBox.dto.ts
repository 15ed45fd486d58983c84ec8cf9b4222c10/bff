import { Location } from 'src/shared/dto/location.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class BoundingBoxDto {
  @ApiProperty({
    description: 'Left bottom',
    type: Location,
  })
  @ValidateNested()
  @Type(() => Location)
  x: Location

  @ApiProperty({
    description: 'Right top',
    type: Location,
  })
  @ValidateNested()
  @Type(() => Location)
  y: Location
}