import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageMethodEntity } from './storage-method.entity';
import { StorageMethodController } from './storage-method.controller';
import { StorageMethodService } from './storage-method.service';

@Module({
  imports: [TypeOrmModule.forFeature([StorageMethodEntity])],
  controllers: [StorageMethodController],
  providers: [StorageMethodService],
})
export class StorageMethodModule {}
