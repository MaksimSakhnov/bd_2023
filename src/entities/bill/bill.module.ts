import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillEntity } from '@entities/bill/bill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BillEntity])],
})
export class BillModule {}
