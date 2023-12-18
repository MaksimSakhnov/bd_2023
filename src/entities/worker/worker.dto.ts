import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { WarehouseEntity } from '@entities/warehouse/warehouse.entity';
import { WorkerEntity } from '@entities/worker/worker.entity';
import { WarehouseDto } from '@entities/warehouse/warehouse.dto';

export class WorkerDto implements Readonly<WorkerDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  surname: string;

  @ApiProperty({ required: true })
  @IsNumber()
  warehouse_id: number;

  @ApiProperty({ required: true })
  warehouse: WarehouseEntity | undefined;

  public static from(dto: Partial<WorkerDto>) {
    const it = new WorkerDto();
    it.id = dto.id ?? 0;
    it.name = dto.name ?? '';
    it.surname = dto.surname ?? '';
    it.warehouse_id = dto.warehouse_id ?? 0;
    it.warehouse = dto.warehouse;

    return it;
  }

  public static fromEntity(entity: WorkerEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
      surname: entity.surname,
      warehouse_id: entity.warehouse_id,
      // @ts-ignore
      warehouse: entity.warehouse
        ? WarehouseDto.fromEntity(entity.warehouse)
        : undefined,
    });
  }

  public toEntity() {
    const it = new WorkerEntity();
    it.id = this.id;
    it.name = this.name;
    it.surname = this.surname;
    it.warehouse_id = this.warehouse_id;
    return it;
  }
}
