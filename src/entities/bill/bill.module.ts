import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillEntity } from '@entities/bill/bill.entity';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';

@Module({
  imports: [TypeOrmModule.forFeature([BillEntity])],
  controllers: [BillController],
  providers: [BillService],
})
export class BillModule {}
