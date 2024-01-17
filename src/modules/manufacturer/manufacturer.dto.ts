import { ApiProperty } from '@nestjs/swagger';
import { VendorEntity } from '../vendor/vendor.entity';
import { ManufacturerEntity } from '../manufacturer/manufacturer.entity';

export class ManufacturerDto implements Readonly<ManufacturerDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  adress: string;

  @ApiProperty({ required: true })
  phone: string;

  @ApiProperty()
  vendors: VendorEntity[] | undefined;

  public static from(dto: Partial<ManufacturerDto>) {
    const it = new ManufacturerDto();
    it.id = dto.id ?? 0;
    it.name = dto.name ?? '';
    it.adress = dto.adress ?? '';
    it.phone = dto.phone ?? '';
    it.vendors = dto.vendors ?? undefined;
    return it;
  }

  public static fromEntity(entity: ManufacturerEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
      adress: entity.adress,
      phone: entity.phone,
      vendors: entity.vendors,
    });
  }

  public toEntity() {
    const it = new ManufacturerEntity();
    it.id = this.id;
    it.name = this.name;
    it.adress = this.adress;
    it.phone = this.phone;
    return it;
  }
}
