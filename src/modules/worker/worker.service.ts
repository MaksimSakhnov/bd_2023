import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkerEntity } from '../worker/worker.entity';
import { WorkerDto } from '../worker/worker.dto';

@Injectable()
export class WorkerService {
  constructor(
    @InjectRepository(WorkerEntity)
    private readonly repo: Repository<WorkerEntity>,
  ) {}

  public async getAll() {
    const data = await this.repo
      .find()
      .then((items) => items.map((el) => WorkerDto.fromEntity(el)));
    return data;
  }

  async findOne(id: number) {
    return this.repo.findOne({
      where: { id: id },
      relations: ['warehouse'],
    });
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }

  async create(dto: WorkerDto) {
    const e = await this.repo.save(dto.toEntity());
    return WorkerDto.fromEntity(e);
  }
}
