import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ManufacturerEntity } from '../manufacturer/manufacturer.entity';
import { ManufacturerDto } from '../manufacturer/manufacturer.dto';

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectRepository(ManufacturerEntity)
    private readonly repo: Repository<ManufacturerEntity>,
  ) {}

  public async getAll() {
    const data = await this.repo
      .find()
      .then((items) => items.map((el) => ManufacturerDto.fromEntity(el)));
    return data;
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }

  async create(dto: ManufacturerDto) {
    const e = await this.repo.save(dto.toEntity());
    return ManufacturerDto.fromEntity(e);
  }
}
