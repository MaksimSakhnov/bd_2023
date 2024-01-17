import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInWarehouseEntity } from '../productInWarehouse/productInWarehouse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInWarehouseEntity])],
})
export class ProductInWarehouseModule {}
