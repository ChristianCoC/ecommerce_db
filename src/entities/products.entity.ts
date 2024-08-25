import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: 'products'
})
export class Products {

  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: UUID;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false,
    length: 50
  })
  name: string;

  @Column({
    name: 'description',
    type: 'varchar',
    nullable: false
  })
  description: string;

  @Column({
    name: 'price',
    type: 'decimal',
    nullable: false,
    precision: 10,
    scale: 2
  })
  price: number;

  @Column({
    name: 'stock',
    type: 'int',
    nullable: false
  })
  stock: number;

  @Column({
    name: 'imgUrl',
    type: 'varchar',
    default: 'https://via.placeholder.com/150',
  })
  imgUrl: string;
}