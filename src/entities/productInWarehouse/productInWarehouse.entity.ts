import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WarehouseEntity } from '@entities/warehouse/warehouse.entity';
import { IncomingProductEntity } from '@entities/incomingProduct/incoming-product.entity';

@Entity('products_in_warehouse')
export class ProductInWarehouseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  count: number;

  @ManyToOne(
    () => WarehouseEntity,
    (warehouse) => warehouse.products_in_warehouse,
    {
      nullable: false,
      persistence: false,
    },
  )
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: WarehouseEntity;

  @OneToOne(
    () => IncomingProductEntity,
    (incomingPE) => incomingPE.product_in_warehouse,
    { nullable: false },
  )
  @JoinColumn({ name: 'incoming_products_id' })
  incoming_product: IncomingProductEntity;
}
