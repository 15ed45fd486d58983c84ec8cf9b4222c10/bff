import {ApiProperty} from "@nestjs/swagger";
import {IsUUID} from "class-validator";
import {CreateAccidentDto} from "src/accident/dto/create-accident.dto";

export class Accident extends CreateAccidentDto{
    @ApiProperty({
        description: 'Unique identifier for the incident',
    })
    @IsUUID()
    id: string;
}
