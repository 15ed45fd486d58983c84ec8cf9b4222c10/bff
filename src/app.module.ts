import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {PrismaService} from "src/prisma/prisma.service";
import {ClsModule} from "nestjs-cls";
import { AccidentModule } from './accident/accident.module';
import { OsmModule } from './osm/osm.module';
import { TwoGisModule } from './two-gis/two-gis.module';

@Module({
  imports: [
    ClsModule.forRootAsync({
      global: true,
      useFactory: () => ({
        middleware: {
          mount: true,
        },
      })
    }),
    AccidentModule,
    OsmModule,
    TwoGisModule,
  ],
  controllers: [AppController],
  providers: [
    PrismaService,
  ],
})
export class AppModule {}
