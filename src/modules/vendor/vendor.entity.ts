import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ManufacturerEntity } from '../manufacturer/manufacturer.entity';
import { IncomingProductEntity } from '../incomingProduct/incoming-product.entity';

@Entity('vendors')
export class VendorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  adress: string;

  @Column({ type: 'varchar', nullable: false })
  phone: string;

  @ManyToOne(() => ManufacturerEntity, (manufacturer) => manufacturer.vendors, {
    nullable: false,
    persistence: false,
  })
  @JoinColumn({ name: 'manufacturer_id' })
  manufacturer: ManufacturerEntity;

  @Column({ type: 'int', nullable: false })
  manufacturer_id: number;

  @OneToMany(() => IncomingProductEntity, (incPE) => incPE.vendor)
  incoming_products: IncomingProductEntity[];
}
