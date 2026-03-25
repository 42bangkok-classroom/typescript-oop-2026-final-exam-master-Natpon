
import { Controller, Get, Post, Body } from '@nestjs/common';

import { ProductService } from './product.service';
import { Product } from './dto/productInterface';
import { ApiResponse } from 'src/interfaces/response.interface';

@Controller('Product')
export class ProductController {
  constructor(private ProductService: ProductService) { }



  @Get()
  async findAll(): ApiResponse<Promise<Product[]>> {
    return {
      success: true,
      data: this.ProductService.findAll(),
      message: "Fetched products successfully"
    }
  }
}
