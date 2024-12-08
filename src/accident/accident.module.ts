import { Module } from '@nestjs/common';
import { AccidentService } from './accident.service';
import { AccidentController } from './accident.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [AccidentController],
  providers: [AccidentService, PrismaService],
})
export class AccidentModule {}
