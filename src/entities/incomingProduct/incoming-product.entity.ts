import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from '@entities/product/product.entity';
import { VendorEntity } from '@entities/vendor/vendor.entity';
import { BillEntity } from '@entities/bill/bill.entity';
import { ProductInWarehouseEntity } from '@entities/productInWarehouse/productInWarehouse.entity';

@Entity('incoming_products')
export class IncomingProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  count: number;

  @ManyToOne(() => ProductEntity, (product) => product.incoming_products, {
    nullable: false,
  })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => VendorEntity, (vendor) => vendor.incoming_products, {
    nullable: false,
  })
  @JoinColumn({ name: 'vendor_id' })
  vendor: VendorEntity;

  @ManyToOne(() => BillEntity, (bill) => bill, { nullable: false })
  @JoinColumn({ name: 'bill_id' })
  bill: BillEntity;

  @OneToOne(() => ProductInWarehouseEntity, (el) => el.incoming_product)
  product_in_warehouse: ProductInWarehouseEntity;
}
