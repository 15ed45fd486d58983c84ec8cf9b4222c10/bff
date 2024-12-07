import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsInt, Min, Max, IsUrl, IsDate, ValidateNested } from 'class-validator';
import { $Enums } from '@prisma/client';
import { Type } from 'class-transformer';
import { Location } from 'src/shared/dto/location.dto';

export class CreateAccidentDto {
    @ApiProperty({
        description: 'Type of the incident',
        enumName: 'AccidentTypeEnum',
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
    @ValidateNested()
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
        enumName: 'AccidentStatusEnum',
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
