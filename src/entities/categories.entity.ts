import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'categories'
})
export class Categories {

    @PrimaryGeneratedColumn({
        name: 'id',
    })
    id: UUID;

    @Column({
        name: 'name',
        type: 'varchar',
        length: 50,
        nullable: false
    })
    name: string;
}