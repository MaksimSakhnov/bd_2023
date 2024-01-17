import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '@modules/user/user.const';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'email', type: 'varchar', unique: true })
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'createdAt', type: 'date' })
  createdAt: Date;

  @Column({ name: 'updatedAt', type: 'date' })
  updatedAt: Date;

  @Column({
    name: 'roles',
    type: 'enum',
    array: true,
    enum: Role,
    default: [Role.USER],
  })
  roles: Role[];
}
