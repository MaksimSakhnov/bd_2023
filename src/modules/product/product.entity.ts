import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ProductGroupEntity } from '../productGroup/product-group.entity';

import { ManufacturerEntity } from '../manufacturer/manufacturer.entity';
import { IncomingProductEntity } from '../incomingProduct/incoming-product.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ManyToOne(() => ProductGroupEntity, undefined, { nullable: false })
  @JoinColumn({ name: 'product_group_id' })
  product_group: ProductGroupEntity;

  @Column({ type: 'int', nullable: false })
  product_group_id: number;

  @Column({ type: 'int', nullable: false })
  cost: number;

  @ManyToOne(() => ManufacturerEntity, undefined, { nullable: false })
  @JoinColumn({ name: 'manufacturer_id' })
  manufacturer: ManufacturerEntity;

  @Column({ type: 'int', nullable: false })
  manufacturer_id: number;

  @OneToMany(() => IncomingProductEntity, (incProduct) => incProduct.product, {
    onDelete: 'CASCADE',
  })
  incoming_products: IncomingProductEntity[];
}
