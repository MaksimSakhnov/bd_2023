import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { StorageMethodService } from '../storageMethod/storage-method.service';
import { StorageMethodDto } from '../storageMethod/storage-method.dto';

@Controller('storage_methods')
export class StorageMethodController {
  constructor(private serv: StorageMethodService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAllStorageMethods(@Req() req: Request) {
    return await this.serv.getAll();
  }

  @Post('/')
  async createStorageMethod(
    @Body(new ValidationPipe({ transform: true }))
    storageMethodDto: StorageMethodDto,
  ) {
    return this.serv.create(storageMethodDto);
  }

  @Delete(':id')
  async deleteStorageMethod(@Param('id') id: string) {
    return await this.serv.remove(Number(id));
  }
}
