import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { AccidentService } from './accident.service';
import { CreateAccidentDto } from './dto/create-accident.dto';
import { UpdateAccidentDto } from './dto/update-accident.dto';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Accident} from "./entities/accident.entity";

@ApiTags('Accident')
@Controller('accident')
export class AccidentController {
  constructor(private readonly accidentService: AccidentService) {}

  @Post()
  @ApiOperation({ summary: 'Create an incident' })
  @ApiResponse({ status: 201, description: 'Incident created successfully' })
  async create(@Body() createAccidentDto: CreateAccidentDto): Promise<Accident> {
    return this.accidentService.create(createAccidentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all incidents' })
  @ApiResponse({ status: 200, description: 'List of incidents' })
  async findAll(): Promise<Accident[]> {
    return this.accidentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get incident by ID' })
  @ApiResponse({ status: 200, description: 'The incident with the given ID' })
  async findOne(@Param('id') id: string): Promise<Accident> {
    return this.accidentService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAccidentDto: UpdateAccidentDto): Promise<Accident> {
    return this.accidentService.update(id, updateAccidentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Accident> {
    return this.accidentService.remove(id);
  }
}
