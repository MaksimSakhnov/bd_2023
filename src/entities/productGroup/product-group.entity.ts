import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn} from 'typeorm';
import {StorageMethodEntity} from "@entities/storageMethod/storage-method.entity";



@Entity('product_groups')
export class ProductGroupEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: 'name', type: 'varchar' })
    name: string;
    @ManyToOne(()=> StorageMethodEntity, undefined, {
        nullable: false,
        persistence: false,
    })
    @JoinColumn({name: "storage_method_id"})
    storage_method: StorageMethodEntity;

    @Column({type: 'int', nullable: false})
    storage_method_id: number;
}
