import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class Location {
  @ApiProperty()
  @IsNumber()
  latitude: number;

  @ApiProperty()
  @IsNumber()
  longitude: number;
}