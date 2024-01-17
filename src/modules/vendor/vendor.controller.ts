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
import { VendorDto } from '../vendor/vendor.dto';
import { VendorService } from '../vendor/vendor.service';

@Controller('vendors')
export class VendorController {
  constructor(private serv: VendorService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAllVendors(@Req() req: Request) {
    return await this.serv.getAll();
  }

  @Post('/')
  async createVendor(
    @Body(new ValidationPipe({ transform: true }))
    dto: VendorDto,
  ) {
    return this.serv.create(dto);
  }

  @Delete(':id')
  async deleteVendor(@Param('id') id: string) {
    return await this.serv.remove(Number(id));
  }
}
