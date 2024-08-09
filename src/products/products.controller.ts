import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProducts() {
    return this.productsService.getProducts(); 
  }
  @Get(':id')
  getProductsById() {
    return this.productsService.getProductsById();
  }
  @Post()
  createProducts() {
    return this.productsService.createProducts();
  }
  @Put(':id')
  updateProducts() {
    return this.productsService.updateProducts();
  }
  @Delete(':id')
  deleteProducts() {
    return this.productsService.deleteProducts();
  }
}
