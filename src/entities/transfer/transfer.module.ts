import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferEntity } from '@entities/transfer/transfer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransferEntity])],
})
export class TransferModule {}
