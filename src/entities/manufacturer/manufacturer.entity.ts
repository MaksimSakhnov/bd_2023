import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('manufacturers')
export class ManufacturerEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name', type: 'varchar'})
    name: string;

    @Column({type: 'varchar', nullable: false})
    adress: string;

    @Column({type: 'varchar', nullable: false})
    phone: string
}
