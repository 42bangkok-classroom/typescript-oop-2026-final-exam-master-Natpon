import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as responseInterface from './interfaces/response.interface';
import { first } from './purchases/dto/firstdto';
import { Ve } from './purchases/dto/firstdto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*@Get()
  getHello(): responseInterface.ApiResponse<first> {
    return {
  success: true,
  //data: {
  //  "service": "purchase-api",
  //  "version": "1.0.0",
  //},
  message: this.appService.getHello(),
  success: false,
  data: null,
  message: ''
};
  }*/
}
