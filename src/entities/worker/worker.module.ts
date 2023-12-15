import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkerEntity } from '@entities/worker/worker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkerEntity])],
})
export class WorkerModule {}
