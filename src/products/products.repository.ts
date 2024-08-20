import { Inject, Injectable } from "@nestjs/common";
import { Products } from "src/entities/products.entity";
import { productsMock } from "src/mocks/products.mocks";

@Injectable()
export class ProductsRepository {
  private products: Products[] = productsMock;
  getProducts(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return this.products.slice(startIndex, endIndex);
  }
  getProductsById(id : string) {
    const productId = this.products.find((product) => product.id === Number(id));
    return productId;
  }
  createProducts(products: Products): Products | string {
    this.products.push(products);
    const message = `Product with id ${products.id} created`;
    return message;
  }
  updateProducts(id: string, updateProducts: Products): Products | string {
    const index = this.products.findIndex((product) => product.id === Number(id));
    this.products[index] = updateProducts;
    const message = `Product with id ${updateProducts.id} updated`;
    return message;
  }
  deleteProducts(id: string) {
    const index = this.products.findIndex((product) => product.id === Number(id));
    const deleteProducts = this.products.splice(index, 1);
    const message = `Product with id ${deleteProducts[0].id} deleted`;
    return message;
  }
}