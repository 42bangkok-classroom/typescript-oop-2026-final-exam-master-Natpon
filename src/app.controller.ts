import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as responseInterface from './interfaces/response.interface';
import { first } from './purchases/dto/firstdto';
import { Ve } from './purchases/dto/firstdto';
import type { ApiResponse  } from './interfaces/response.interface';
import { version } from 'os';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): ApiResponse<first> {
    return {
      success: true,
      data:[
        service: "purchase-api",
        version: "1.0.0"
      ],
      message: this.appService.getHello()
  
  }
}

}