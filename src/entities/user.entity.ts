import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: 'users'
})
export class Users {

  @PrimaryGeneratedColumn({
    name: 'id'
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
    name: 'email',
    type: 'varchar',
    nullable: false,
    unique: true,
    length: 50
  })
  email: string;

  @Column({
    name: 'password',
    type: 'varchar',
    nullable: false
  })
  password: string;

  @Column({
    name: 'phone',
    type: 'int',
  })
  phone: number;
  
  @Column({
    name: 'country',
    type: 'varchar',
    length: 50
  })
  country: string;

  @Column({
    name: 'address',
    type: 'varchar',
  })
  address: string;

  @Column({
    name: 'city',
    type: 'varchar',
    length: 50
  })
  city: string;
}