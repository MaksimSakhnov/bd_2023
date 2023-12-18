import { ApiProperty } from '@nestjs/swagger';
import { StorageMethodEntity } from '@entities/storageMethod/storage-method.entity';
import { ProductGroupEntity } from '@entities/productGroup/product-group.entity';
import { StorageMethodDto } from '@entities/storageMethod/storage-method.dto';
import { IsNumber } from 'class-validator';

export class ProductGroupDto implements Readonly<ProductGroupDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  @IsNumber()
  storage_method_id: number;

  @ApiProperty({ required: true })
  storage_method: StorageMethodEntity | undefined;

  public static from(dto: Partial<ProductGroupDto>) {
    const it = new ProductGroupDto();
    it.id = dto.id ?? 0;
    it.name = dto.name ?? '';
    it.storage_method_id = dto.storage_method_id ?? 0;
    it.storage_method = dto.storage_method;
    return it;
  }

  public static fromEntity(entity: ProductGroupEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
      storage_method_id: entity.storage_method_id,
      storage_method: entity.storage_method
        ? StorageMethodDto.fromEntity(entity.storage_method)
        : undefined,
    });
  }

  public toEntity() {
    const it = new ProductGroupEntity();
    it.id = this.id;
    it.name = this.name;
    it.storage_method_id = this.storage_method_id;
    return it;
  }
}
