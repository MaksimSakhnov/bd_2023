import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('storage_methods')
export class StorageMethodEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: 'name', type: 'varchar' })
    name: string;
}
