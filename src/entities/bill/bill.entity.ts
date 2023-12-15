import {
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IncomingProductEntity } from '@entities/incomingProduct/incoming-product.entity';

@Entity('bills')
export class BillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'date', type: 'date', nullable: false })
  date: Date;

  @OneToMany(() => IncomingProductEntity, (el) => el.bill)
  incoming_products: IncomingProductEntity[];
}
