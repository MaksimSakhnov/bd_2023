import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VendorEntity } from '../vendor/vendor.entity';

@Entity('manufacturers')
export class ManufacturerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  adress: string;

  @Column({ type: 'varchar', nullable: false })
  phone: string;

  @OneToMany(() => VendorEntity, (vendor) => vendor.manufacturer)
  vendors: VendorEntity[];
}
