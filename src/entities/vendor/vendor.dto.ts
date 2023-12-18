import { ApiProperty } from '@nestjs/swagger';
import { VendorEntity } from '@entities/vendor/vendor.entity';
import { IsNumber, IsString } from 'class-validator';
import { IncomingProductEntity } from '@entities/incomingProduct/incoming-product.entity';

export class VendorDto implements Readonly<VendorDto> {
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

  @ApiProperty({ required: true })
  @IsNumber()
  manufacturer_id: number;

  @ApiProperty()
  incoming_products: IncomingProductEntity[] | undefined;

  public static from(dto: Partial<VendorDto>) {
    const it = new VendorDto();
    it.id = dto.id ?? 0;
    it.name = dto.name ?? '';
    it.adress = dto.adress ?? '';
    it.phone = dto.phone ?? '';
    it.manufacturer_id = dto.manufacturer_id ?? 0;
    it.incoming_products = dto.incoming_products ?? undefined;
    return it;
  }

  public static fromEntity(entity: VendorEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
      adress: entity.adress,
      phone: entity.phone,
      manufacturer_id: entity.manufacturer_id,
      incoming_products: entity.incoming_products,
    });
  }

  public toEntity() {
    const it = new VendorEntity();
    it.id = this.id;
    it.name = this.name;
    it.adress = this.adress;
    it.phone = this.phone;
    it.manufacturer_id = this.manufacturer_id;
    return it;
  }
}
