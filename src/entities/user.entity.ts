import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: 'users'
})
export class Users {

  @PrimaryGeneratedColumn('uuid', {
    name: 'id'
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
    name: 'email',
    type: 'string',
    nullable: false,
    unique: true,
    length: 50
  })
  email: string;

  @Column({
    name: 'password',
    type: 'string',
    nullable: false
  })
  password: string;

  @Column({
    name: 'phone',
    type: 'int',
  })
  phone: string;
  
  @Column({
    name: 'country',
    type: 'string',
    length: 50
  })
  country: string;

  @Column({
    name: 'address',
    type: 'string',
  })
  address: string;

  @Column({
    name: 'city',
    type: 'string',
    length: 50
  })
  city: string;
}