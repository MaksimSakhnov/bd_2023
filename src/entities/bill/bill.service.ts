import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillEntity } from '@entities/bill/bill.entity';
import { BillDto } from '@entities/bill/bill.dto';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(BillEntity)
    private readonly repo: Repository<BillEntity>,
  ) {}

  public async getAll() {
    const data = await this.repo
      .find()
      .then((items) => items.map((el) => BillDto.fromEntity(el)));
    return data;
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }

  async create(dto: BillDto) {
    const e = await this.repo.save(dto.toEntity());
    return BillDto.fromEntity(e);
  }
}
