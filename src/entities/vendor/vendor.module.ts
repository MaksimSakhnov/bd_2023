import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorEntity } from '@entities/vendor/vendor.entity';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VendorEntity])],
  providers: [VendorService],
  controllers: [VendorController],
})
export class VendorModule {}
