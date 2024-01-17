import { BillEntity } from '../bill/bill.entity';
import { IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BillDto implements Readonly<BillDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsDateString()
  date: Date;

  // @ApiProperty()
  // incoming_products: IncomingProductEntity[] | undefined;

  public static from(dto: Partial<BillDto>) {
    const it = new BillDto();
    it.id = dto.id ?? 0;
    it.date = it.date ?? Date.now();
    // it.incoming_products = it.incoming_products;
    return it;
  }

  public static fromEntity(entity: BillEntity) {
    return this.from({
      id: entity.id,
      date: entity.date,
      // incoming_products: entity.incoming_products ? ,
    });
  }

  public toEntity() {
    const it = new BillEntity();
    it.id = this.id;
    it.date = this.date;
    // it.incoming_products = this.incoming_products ;
    return it;
  }
}
