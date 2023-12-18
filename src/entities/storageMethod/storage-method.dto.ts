import { ApiProperty } from '@nestjs/swagger';
import { StorageMethodEntity } from '@entities/storageMethod/storage-method.entity';

export class StorageMethodDto implements Readonly<StorageMethodDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  name: string;

  public static from(dto: Partial<StorageMethodDto>) {
    const it = new StorageMethodDto();
    it.id = dto.id ?? 0;
    it.name = dto.name ?? '';
    return it;
  }

  public static fromEntity(entity: StorageMethodEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
    });
  }

  public toEntity() {
    const it = new StorageMethodEntity();
    it.id = this.id;
    it.name = this.name;
    return it;
  }
}
