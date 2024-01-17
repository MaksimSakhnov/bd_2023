import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@modules/user/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from '@modules/user/user.dto';
import { genSaltSync, hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repo: Repository<UserEntity>,
  ) {}

  public async getAll() {
    const data = await this.repo
      .find()
      .then((items) => items.map((el) => UserDto.fromEntity(el)));
    return data;
  }

  public async save(user: UserDto) {
    const hashedPassword = this.hashPassword(user.password);
    return this.repo.save({
      ...user,
      password: hashedPassword,
    });
  }

  public async getOne(id: number) {
    return this.repo.findOne({
      where: { id: id },
    });
  }

  public async delete(id: number) {
    return await this.repo.delete(id);
  }

  private hashPassword(password: string) {
    return hashSync(password, genSaltSync(10));
  }
}
