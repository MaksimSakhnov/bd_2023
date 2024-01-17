import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManufacturerEntity } from '../manufacturer/manufacturer.entity';
import { ManufacturerController } from './manufacturer.controller';
import { ManufacturerService } from './manufacturer.service';

@Module({
  imports: [TypeOrmModule.forFeature([ManufacturerEntity])],
  controllers: [ManufacturerController],
  providers: [ManufacturerService],
})
export class ManufacturerModule {}
