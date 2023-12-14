import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinTable, JoinColumn} from 'typeorm';

import {ProductGroupEntity} from "@entities/productGroup/product-group.entity";

import {ManufacturerEntity} from "@entities/manufacturer/manufacturer.entity";



@Entity('products')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @ManyToOne(()=> ProductGroupEntity, undefined, {nullable: false})
    @JoinColumn({name: 'product_group_id'})
    product_group: ProductGroupEntity;

    @Column({type: 'int', nullable: false})
    product_group_id: number;

    @Column({type: 'int', nullable: false})
    cost: number;

    @ManyToOne(()=> ManufacturerEntity, undefined, {nullable: false})
    @JoinColumn({name: 'manufacturer_id'})
    manufacturer: ManufacturerEntity;

    @Column({type: 'int', nullable: false})
    manufacturer_id: number;
}
