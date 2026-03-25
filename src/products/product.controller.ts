
import { Controller, Get, Post, Body } from '@nestjs/common';

import { ProductService } from './product.service';
import { Product } from './dto/productInterface';


@Controller('Product')
export class ProductController {
  constructor(private ProductService: ProductService) {}

  

  @Get()
  async findAll(): Promise<Product[]>  {
    return this.ProductService.findAll();
  }
}
