import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VendorEntity } from '../vendor/vendor.entity';
import { VendorDto } from '../vendor/vendor.dto';

@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(VendorEntity)
    private readonly repo: Repository<VendorEntity>,
  ) {}

  public async getAll() {
    const data = await this.repo
      .find()
      .then((items) => items.map((el) => VendorDto.fromEntity(el)));
    return data;
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }

  async create(dto: VendorDto) {
    const e = await this.repo.save(dto.toEntity());
    return VendorDto.fromEntity(e);
  }
}
