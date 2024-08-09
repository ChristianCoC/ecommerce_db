import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) { }
  getProducts(){
    return this.productsRepository.getProducts();
  }
  getProductsById() {
    return this.productsRepository.getProductsById();
  }
  createProducts() {
    return this.productsRepository.createProducts();
  }
  updateProducts() {
    return this.productsRepository.updateProducts();
  }
  deleteProducts() {
    return this.productsRepository.deleteProducts();
  }
}
