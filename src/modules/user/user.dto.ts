import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmail, IsString } from "class-validator";
import { Role } from '@modules/user/user.const';
import { UserEntity } from '@modules/user/user.entity';

export class UserDto implements Readonly<UserDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  password: string;

  @ApiProperty({ required: true })
  createdAt: Date;

  @ApiProperty({ required: true })
  updatedAt: Date;

  @ApiProperty({ required: true })
  //@IsArray()
  roles: Role[];

  public static from(dto: Partial<UserDto>) {
    const it = new UserDto();
    it.id = dto.id ?? 0;
    it.name = dto.name ?? '';
    it.email = dto.email ?? '';
    it.password = dto.password ?? '';
    it.createdAt = dto.createdAt ?? new Date();
    it.updatedAt = dto.updatedAt ?? new Date();
    it.roles = dto.roles ?? [];

    return it;
  }

  public static fromEntity(entity: UserEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
      email: entity.email,
      password: entity.password,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      roles: entity.roles,
    });
  }

  public toEntity() {
    const it = new UserEntity();
    it.id = this.id;
    it.name = this.name;
    it.email = this.email;
    it.createdAt = this.createdAt;
    it.password = this.password;
    it.updatedAt = this.updatedAt;
    it.roles = this.roles;
    return it;
  }
}
