import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ProductEntity } from '@entities/product/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService extends TypeOrmCrudService<ProductEntity> {
  constructor(
    @InjectRepository(ProductEntity) repo: Repository<ProductEntity>,
  ) {
    super(repo);
  }
}
