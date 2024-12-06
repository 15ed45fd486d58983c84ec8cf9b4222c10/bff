import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Utils')
@Controller()
export class AppController {
  constructor() {}

  @Get('/ping')
  @ApiOkResponse({
    type: String,
  })
  ping(): string {
    return 'pong';
  }
}
