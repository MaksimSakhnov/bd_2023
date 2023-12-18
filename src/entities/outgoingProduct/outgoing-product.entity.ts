import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductInWarehouseEntity } from '@entities/productInWarehouse/productInWarehouse.entity';

@Entity('outgoing_products')
export class OutgoingProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  count: number;

  @ManyToOne(
    () => ProductInWarehouseEntity,
    (product) => product.outgoing_products,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'product_in_warehouse_id' })
  product_in_warehouse: ProductInWarehouseEntity;
}
