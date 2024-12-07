import { ApiProperty } from '@nestjs/swagger';
import { LayerEnum } from 'src/two-gis/dto/layer.enum';
import { IsArray, IsEnum, IsString } from 'class-validator';

export class GetLayersRequestDto {
  @ApiProperty({ enum: LayerEnum, enumName: 'LayerEnum', isArray: true })
  @IsArray()
  @IsEnum(LayerEnum, { each: true })
  layers: LayerEnum[];

  @ApiProperty({ default: 'krasnodar', example: 'krasnodar' })
  @IsString()
  project: string = 'krasnodar';
}