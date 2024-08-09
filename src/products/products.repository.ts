import { Inject, Injectable } from "@nestjs/common";
import { Products } from "src/entities/products.entity";

@Injectable()
export class ProductsRepository {
  constructor(private readonly productsRepository: Products[]) { }
  getProducts() {
    return this.productsRepository;
  }
  getProductsById() {
    return this.productsRepository;
  }
  createProducts() {
    return this.productsRepository;
  }
  updateProducts() {
    return this.productsRepository;
  }
  deleteProducts() {
    return this.productsRepository;
  }
}