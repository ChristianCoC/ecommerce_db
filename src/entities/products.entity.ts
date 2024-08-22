import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: 'products'
})
export class Products {

  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'string',
    nullable: false,
    length: 50
  })
  name: string;

  @Column({
    name: 'description',
    type: 'string',
    nullable: false
  })
  description: string;

  @Column({
    name: 'price',
    type: 'float',
    nullable: false,
    precision: 10,
    scale: 2
  })
  price: number;

  @Column({
    name: 'stock',
    type: 'number',
    nullable: false
  })
  stock: boolean;

  @Column({
    name: 'imgUrl',
    type: 'string',
    default: 'https://via.placeholder.com/150',
  })
  imgUrl: string;
}