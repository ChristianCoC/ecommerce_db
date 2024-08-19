import { Inject, Injectable } from "@nestjs/common";
import { Products } from "src/entities/products.entity";
import { productsMock } from "src/mocks/products.mocks";

@Injectable()
export class ProductsRepository {
  private products: Products[] = productsMock;
  getProducts() {
    return this.products;
  }
  getProductsById(id : string) {
    return this.products.find((product) => product.id === Number(id));
  }
  createProducts(products: Products){
    this.products.push(products);
    return products;
  }
  updateProducts(id: string, updateProducts: Products) {
    const index = this.products.findIndex((product) => product.id === Number(id));
    this.products[index] = updateProducts;
    return updateProducts;
  }
  deleteProducts(id: string) {
    const index = this.products.findIndex((product) => product.id === Number(id));
    const deleteProducts = this.products.splice(index, 1);
    return deleteProducts;
  }
}