import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutgoingProductEntity } from '@entities/outgoingProduct/outgoing-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OutgoingProductEntity])],
})
export class OutgoingProductModule {}
