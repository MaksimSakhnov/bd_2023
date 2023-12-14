import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {ManufacturerEntity} from "@entities/manufacturer/manufacturer.entity";

@Entity('vendors')
export class VendorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name', type: 'varchar'})
    name: string;

    @Column({type: 'varchar', nullable: false})
    adress: string;

    @Column({type: 'varchar', nullable: false})
    phone: string;

    @ManyToOne(() => ManufacturerEntity, undefined, {nullable: false, persistence: false})
    @JoinColumn({name: 'manufacturer_id'})
    manufacturer: ManufacturerEntity;

    @Column({type: 'int', nullable: false})
    manufacturer_id: number;
}
