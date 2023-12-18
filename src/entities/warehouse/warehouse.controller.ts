import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { WarehouseService } from '@entities/warehouse/warehouse.service';
import { WarehouseDto } from '@entities/warehouse/warehouse.dto';

@Controller('warehouses')
export class WarehouseController {
  constructor(private serv: WarehouseService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAllWarehouses(@Req() req: Request) {
    return await this.serv.getAll();
  }

  @Post('/')
  async createWarehouse(
    @Body(new ValidationPipe({ transform: true }))
    dto: WarehouseDto,
  ) {
    return this.serv.create(dto);
  }

  @Delete(':id')
  async deleteWarehouse(@Param('id') id: string) {
    return await this.serv.remove(Number(id));
  }
}
