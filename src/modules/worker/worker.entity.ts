import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WarehouseEntity } from '../warehouse/warehouse.entity';

@Entity('workers')
export class WorkerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;

  @Column({ name: 'surname', type: 'varchar', nullable: false })
  surname: string;

  @ManyToOne(() => WarehouseEntity, undefined, {
    nullable: false,
    persistence: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: WarehouseEntity;

  @Column({ type: 'int', nullable: false })
  warehouse_id: number;
}
