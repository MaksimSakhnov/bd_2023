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
import { ManufacturerService } from '../manufacturer/manufacturer.service';
import { ManufacturerDto } from '../manufacturer/manufacturer.dto';

@Controller('manufacturers')
export class ManufacturerController {
  constructor(private serv: ManufacturerService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAllManufacturers(@Req() req: Request) {
    return await this.serv.getAll();
  }

  @Post('/')
  async createManufacturer(
    @Body(new ValidationPipe({ transform: true }))
    manufacturerDto: ManufacturerDto,
  ) {
    return this.serv.create(manufacturerDto);
  }

  @Delete(':id')
  async deleteManufacturer(@Param('id') id: string) {
    return await this.serv.remove(Number(id));
  }
}
