import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductInWarehouseEntity } from '@entities/productInWarehouse/productInWarehouse.entity';

@Entity('warehouses')
export class WarehouseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  adress: string;

  @Column({ type: 'varchar', nullable: false })
  phone: string;

  @OneToMany(
    () => ProductInWarehouseEntity,
    (productInWs) => productInWs.warehouse,
    {},
  )
  products_in_warehouse: ProductInWarehouseEntity[];
}
