import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StorageMethodEntity } from '../storageMethod/storage-method.entity';
import { Repository } from 'typeorm';
import { StorageMethodDto } from '../storageMethod/storage-method.dto';

@Injectable()
export class StorageMethodService {
  constructor(
    @InjectRepository(StorageMethodEntity)
    private readonly repo: Repository<StorageMethodEntity>,
  ) {}

  public async getAll() {
    const data = await this.repo
      .find()
      .then((items) => items.map((el) => StorageMethodDto.fromEntity(el)));
    return data;
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }

  async create(dto: StorageMethodDto) {
    const e = await this.repo.save(dto.toEntity());
    return StorageMethodDto.fromEntity(e);
  }
}
