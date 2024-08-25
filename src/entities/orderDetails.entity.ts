import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'orderDetails'
})
export class OrderDetails {

    @PrimaryGeneratedColumn({
        name: 'id',
    })
    id: UUID;

    @Column({
        name: 'price',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false
    })
    price: number;
}