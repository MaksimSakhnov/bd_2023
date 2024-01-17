import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WarehouseEntity } from '../warehouse/warehouse.entity';
import { IncomingProductEntity } from '../incomingProduct/incoming-product.entity';
import { TransferEntity } from '../transfer/transfer.entity';
import { OutgoingProductEntity } from '../outgoingProduct/outgoing-product.entity';

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

  @OneToMany(() => TransferEntity, (transfer) => transfer.product_in_warehouse)
  transfers: TransferEntity[];

  @OneToMany(
    () => OutgoingProductEntity,
    (oProduct) => oProduct.product_in_warehouse,
  )
  outgoing_products: OutgoingProductEntity[];
}
