import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseEntity } from '@entities/warehouse/warehouse.entity';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WarehouseEntity])],
  providers: [WarehouseService],
  controllers: [WarehouseController],
})
export class WarehouseModule {}
