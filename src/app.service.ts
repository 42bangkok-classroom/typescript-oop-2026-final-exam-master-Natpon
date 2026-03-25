import { Injectable } from '@nestjs/common';
import { ApiResponse } from './interfaces/response.interface';

@Injectable()
export class AppService {
  getHello(): string {
    const a = "Hello NestJS"
    return a;
  }
}
