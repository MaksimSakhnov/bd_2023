import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { WarehouseEntity } from '../warehouse/warehouse.entity';
import { ProductInWarehouseEntity } from '../productInWarehouse/productInWarehouse.entity';

export class WarehouseDto implements Readonly<WarehouseDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  adress: string;

  @ApiProperty({ required: true })
  @IsString()
  phone: string;

  @ApiProperty()
  products_in_warehouse: ProductInWarehouseEntity[] | undefined;

  @ApiProperty()
  from_transfer: ProductInWarehouseEntity[] | undefined;

  @ApiProperty()
  to_transfer: ProductInWarehouseEntity[] | undefined;

  public static from(dto: Partial<WarehouseDto>) {
    const it = new WarehouseDto();
    it.id = dto.id ?? 0;
    it.name = dto.name ?? '';
    it.adress = dto.adress ?? '';
    it.phone = dto.phone ?? '';

    return it;
  }

  public static fromEntity(entity: WarehouseEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
      adress: entity.adress,
      phone: entity.phone,
    });
  }

  public toEntity() {
    const it = new WarehouseEntity();
    it.id = this.id;
    it.name = this.name;
    it.adress = this.adress;
    it.phone = this.phone;
    return it;
  }
}
