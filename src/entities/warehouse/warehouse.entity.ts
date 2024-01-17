import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductInWarehouseEntity } from '@entities/productInWarehouse/productInWarehouse.entity';
import { TransferEntity } from '@entities/transfer/transfer.entity';
import { WorkerEntity } from '@entities/worker/worker.entity';

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
    { onDelete: 'CASCADE' },
  )
  products_in_warehouse: ProductInWarehouseEntity[];

  @OneToMany(() => WorkerEntity, (el) => el.warehouse, { onDelete: 'CASCADE' })
  workers: WorkerEntity[];

  @OneToMany(() => TransferEntity, (transfer) => transfer.from_warehouse, {
    onDelete: 'CASCADE',
  })
  from_transfer: ProductInWarehouseEntity[];

  @OneToMany(() => TransferEntity, (transfer) => transfer.to_warehouse, {
    onDelete: 'CASCADE',
  })
  to_transfer: ProductInWarehouseEntity[];
}
