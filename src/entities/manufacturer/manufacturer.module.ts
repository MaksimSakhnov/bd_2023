import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManufacturerEntity } from '@entities/manufacturer/manufacturer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ManufacturerEntity])],
})
export class ManufacturerModule {}
