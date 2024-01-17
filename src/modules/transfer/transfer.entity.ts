import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductInWarehouseEntity } from '../productInWarehouse/productInWarehouse.entity';
import { WarehouseEntity } from '../warehouse/warehouse.entity';

@Entity('transfers')
export class TransferEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ nullable: false })
  date: Date;

  @ManyToOne(
    () => ProductInWarehouseEntity,
    (productInWs) => productInWs.transfers,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'product_in_warehouse_id' })
  product_in_warehouse: ProductInWarehouseEntity;

  @Column({ type: 'numeric', nullable: false })
  count: number;

  @ManyToOne(
    () => WarehouseEntity,
    (productInWs) => productInWs.from_transfer,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'from_warehouse_id' })
  from_warehouse: WarehouseEntity;

  @ManyToOne(() => WarehouseEntity, (productInWs) => productInWs.to_transfer, {
    nullable: false,
  })
  @JoinColumn({ name: 'to_warehouse_id' })
  to_warehouse: WarehouseEntity;
}
