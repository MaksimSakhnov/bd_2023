import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkerEntity } from '../worker/worker.entity';
import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorkerEntity])],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
