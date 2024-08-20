import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Products } from 'src/entities/products.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) { }
  getProducts(page: number, limit: number) {
    return this.productsRepository.getProducts(page, limit);
  }
  getProductsById(id: string) {
    return this.productsRepository.getProductsById(id);
  }
  createProducts(products: Products) {
    return this.productsRepository.createProducts(products);
  }
  updateProducts(id: string, products: Products) {
    return this.productsRepository.updateProducts(id, products);
  }
  deleteProducts(id: string) {
    return this.productsRepository.deleteProducts(id);
  }
}
