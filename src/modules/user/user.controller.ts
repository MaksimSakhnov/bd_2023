import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { UserDto } from '@modules/user/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body(new ValidationPipe({ transform: true }))
    user: UserDto,
  ) {
    return this.userService.save(user);
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.userService.getOne(Number(id));
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.delete(Number(id));
  }
}
