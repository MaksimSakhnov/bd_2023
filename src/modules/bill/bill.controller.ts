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
import { BillService } from '../bill/bill.service';
import { BillDto } from '../bill/bill.dto';

@Controller('bills')
export class BillController {
  constructor(private serv: BillService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAllBills(@Req() req: Request) {
    return await this.serv.getAll();
  }

  @Post('/')
  async createBill(
    @Body(new ValidationPipe({ transform: true }))
    dto: BillDto,
  ) {
    return this.serv.create(dto);
  }

  @Delete(':id')
  async deleteBill(@Param('id') id: string) {
    return await this.serv.remove(Number(id));
  }
}
