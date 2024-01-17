import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../product/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from '../product/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repo: Repository<ProductEntity>,
  ) {}

  public async getAll(search: string | undefined) {
    if (search) {
      return await this.repo
        .find({
          where: [{ name: search }],
        })
        .then((items) => items.map((e) => ProductDto.fromEntity(e)));
    }
    return await this.repo
      .find()
      .then((items) => items.map((e) => ProductDto.fromEntity(e)));
  }

  public async findOne(id: number) {
    return this.repo.findOne({
      where: { id: id },
      relations: ['manufacturer', 'product_group', 'incoming_products'],
    });
  }
  async remove(id: number) {
    return await this.repo.delete(id);
  }

  async create(dto: ProductDto) {
    console.log(dto);
    const e = await this.repo.save(dto.toEntity());
    return ProductDto.fromEntity(e);
  }

  async getProductCountByProductGroup(): Promise<
    { product_group_id: number; count: number }[]
  > {
    const productCounts = await this.repo
      .createQueryBuilder('product')
      .select('product.product_group_id', 'product_group_id')
      .addSelect('COUNT(*)', 'count')
      .groupBy('product.product_group_id')
      .getRawMany();

    console.log(productCounts);
    return productCounts;
  }
}
