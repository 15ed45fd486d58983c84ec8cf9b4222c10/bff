import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateAccidentDto} from './dto/create-accident.dto';
import {UpdateAccidentDto} from './dto/update-accident.dto';
import {PrismaService} from "prisma/prisma.service";
import { accidentMapper } from './mapper/accidentMapper';
import { Accident } from './entities/accident.entity';

@Injectable()
export class AccidentService {

    constructor(private readonly prismaService: PrismaService) {
    }

    async create(createAccidentDto: CreateAccidentDto): Promise<Accident> {
        return this.prismaService.accident.create({
            data: {
                ...createAccidentDto,
                location: JSON.stringify(createAccidentDto?.location)
            }
        }).then(accidentMapper);
    }

    async findAll(): Promise<Accident[]> {
        return this.prismaService.accident.findMany().then(data => data.map(accidentMapper));
    }

    async findOne(id: string): Promise<Accident> {
        const result = await this.prismaService.accident.findUnique({
            where: {
                id
            }
        });
        if (!result) throw new NotFoundException('Инцидент не найден!');
        return accidentMapper(result)
    }

    async update(id: string, updateAccidentDto: UpdateAccidentDto): Promise<Accident> {
        return this.prismaService.accident.update({
            where: {
                id
            },
            data: {
                ...updateAccidentDto,
                location: JSON.stringify(updateAccidentDto?.location)
            }
        }).then(accidentMapper);
    }

    async remove(id: string): Promise<Accident> {
        return this.prismaService.accident.delete({
            where: {
                id
            }
        }).then(accidentMapper);
    }
}
