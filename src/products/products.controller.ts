import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from 'src/entities/products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProducts(@Query('page') page: number = 1, @Query('limit') limit: number = 5) {
    return this.productsService.getProducts(page, limit); 
  }
  @Get(':id')
  getProductsById(@Param('id') id: string) {
    return this.productsService.getProductsById(id);
  }
  @Post()
  createProducts(@Body() products: Products) {
    return this.productsService.createProducts(products);
  }
  @Put(':id')
  updateProducts(@Param('id') id: string, @Body() products: Products) {
    return this.productsService.updateProducts(id, products);
  }
  @Delete(':id')
  deleteProducts(@Param('id') id: string) {
    return this.productsService.deleteProducts(id);
  }
}
