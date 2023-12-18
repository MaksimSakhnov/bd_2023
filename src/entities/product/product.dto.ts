import { ApiProperty } from '@nestjs/swagger';
import { ManufacturerEntity } from '@entities/manufacturer/manufacturer.entity';
import { IsNumber } from 'class-validator';
import { ProductGroupEntity } from '@entities/productGroup/product-group.entity';
import { ProductEntity } from '@entities/product/product.entity';
import { ProductGroupDto } from '@entities/productGroup/product-group.dto';
import { ManufacturerDto } from '@entities/manufacturer/manufacturer.dto';

export class ProductDto implements Readonly<ProductDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  name: string | undefined;

  @ApiProperty({ required: true })
  @IsNumber()
  product_group_id: number;

  @ApiProperty({ required: true })
  @IsNumber()
  cost: number;

  @ApiProperty({ required: true })
  @IsNumber()
  manufacturer_id: number;

  @ApiProperty()
  product_group: ProductGroupEntity | undefined;

  @ApiProperty()
  manufacturer: ManufacturerEntity | undefined;

  public static from(dto: Partial<ProductDto>) {
    const it = new ProductDto();
    it.id = dto.id ?? 0;
    it.name = dto.name ?? '';
    it.cost = dto.cost ?? 0;
    it.product_group_id = dto.product_group_id ?? 0;
    it.product_group = dto.product_group ?? undefined;
    it.manufacturer = dto.manufacturer ?? undefined;
    return it;
  }

  public static fromEntity(entity: ProductEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
      cost: entity.cost,
      product_group_id: entity.product_group_id,
      // @ts-ignore
      product_group: entity.product_group
        ? ProductGroupDto.fromEntity(entity.product_group)
        : undefined,
      // @ts-ignore
      manufacturer: entity.manufacturer
        ? ManufacturerDto.fromEntity(entity.manufacturer)
        : undefined,
    });
  }

  public toEntity() {
    const it = new ProductEntity();
    it.id = this.id;
    it.cost = this.cost;
    it.manufacturer_id = this.manufacturer_id;
    it.product_group_id = this.product_group_id;
    return it;
  }
}
