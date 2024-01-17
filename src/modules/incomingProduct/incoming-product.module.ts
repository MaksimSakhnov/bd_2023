import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomingProductEntity } from '../incomingProduct/incoming-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IncomingProductEntity])],
})
export class IncomingProductModule {}
