import { Products } from "src/entities/products.entity";

const productsMock: Products[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 100,
    stock: true,
    imgUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description 2',
    price: 200,
    stock: false,
    imgUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description 3',
    price: 300,
    stock: true,
    imgUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description 4',
    price: 400,
    stock: false,
    imgUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Description 5',
    price: 500,
    stock: true,
    imgUrl: 'https://via.placeholder.com/150'
  }
];

export const mocksProducts = {
  getProducts: () => productsMock
}