import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductGroupEntity } from '@entities/productGroup/product-group.entity';
import { ProductGroupDto } from '@entities/productGroup/product-group.dto';

@Injectable()
export class ProductGroupService {
  constructor(
    @InjectRepository(ProductGroupEntity)
    private readonly repo: Repository<ProductGroupEntity>,
  ) {}

  public async getAll() {
    const data = await this.repo
      .find()
      .then((items) => items.map((el) => ProductGroupDto.fromEntity(el)));
    return data;
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }

  async create(dto: ProductGroupDto) {
    const e = await this.repo.save(dto.toEntity());
    return ProductGroupDto.fromEntity(e);
  }
}
