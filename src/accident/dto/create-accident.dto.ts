import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsInt, IsLatitude, IsLongitude, Min, Max, IsUrl, IsDateString, IsObject, IsDate, IsNumber } from 'class-validator';
import { $Enums } from '@prisma/client';
import { Type } from 'class-transformer';

class Location {
    @ApiProperty()
    @IsNumber()
    latitude: number;

    @ApiProperty()
    @IsNumber()
    longitude: number;
}

export class CreateAccidentDto {
    @ApiProperty({
        description: 'Type of the incident',
        enum: $Enums.AccidentTypeEnum,
    })
    @IsEnum($Enums.AccidentTypeEnum)
    type: $Enums.AccidentTypeEnum;

    @ApiProperty({
        description: 'Title of the incident',
    })
    @IsString()
    title: string;

    @ApiProperty({
        description: 'Short description of the incident',
    })
    @IsString()
    description: string;

    @ApiProperty({
        description: 'Address of the incident',
    })
    @IsString()
    address: string;

    @ApiPropertyOptional({
        description: 'Location of the incident',
        type: Location,
    })
    @IsOptional()
    @Type(() => Location)
    location?: Location;

    @ApiProperty({
        description: 'Severity level of the incident (1 to 10)',
        example: 5,
    })
    @IsInt()
    @Min(1)
    @Max(10)
    severity: number;

    @IsDate()
    @Type(() => Date)
    @ApiProperty()
    timestamp: Date;

    @ApiProperty({
        description: 'Status of the incident (active, resolved, pending)',
        enum: $Enums.AccidentStatusEnum,
    })
    @IsEnum($Enums.AccidentStatusEnum)
    status: $Enums.AccidentStatusEnum;

    @ApiPropertyOptional({
        description: 'Optional image URL for the incident',
        required: false,
    })
    @IsOptional()
    @IsUrl()
    imageUrl?: string | null;
}
