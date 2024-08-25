import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'orders'
})
export class Orders {

    @PrimaryGeneratedColumn({
        name: 'id',
    })
    id: UUID;

    @Column({
        name: 'date',
        type: 'timestamp',
    })
    date: Date;
}