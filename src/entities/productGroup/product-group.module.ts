import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductGroupEntity } from '@entities/productGroup/product-group.entity';
import { ProductGroupService } from './product-group.service';
import { ProductGroupController } from './product-group.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductGroupEntity])],
  providers: [ProductGroupService],
  controllers: [ProductGroupController],
})
export class ProductGroupModule {}
