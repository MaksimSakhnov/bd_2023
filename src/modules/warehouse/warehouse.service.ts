import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WarehouseEntity } from '../warehouse/warehouse.entity';
import { WarehouseDto } from '../warehouse/warehouse.dto';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(WarehouseEntity)
    private readonly repo: Repository<WarehouseEntity>,
  ) {}

  public async getAll() {
    const data = await this.repo
      .find()
      .then((items) => items.map((el) => WarehouseDto.fromEntity(el)));
    return data;
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }

  async create(dto: WarehouseDto) {
    const e = await this.repo.save(dto.toEntity());
    return WarehouseDto.fromEntity(e);
  }
}
