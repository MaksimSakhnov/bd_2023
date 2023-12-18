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
import { WorkerService } from '@entities/worker/worker.service';
import { WorkerDto } from '@entities/worker/worker.dto';

@Controller('workers')
export class WorkerController {
  constructor(private serv: WorkerService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAllWarehouses(@Req() req: Request) {
    return await this.serv.getAll();
  }

  @Get(':id')
  async getOneWorker(@Param('id') id: string) {
    return await this.serv.findOne(Number(id));
  }

  @Post('/')
  async createWarehouse(
    @Body(new ValidationPipe({ transform: true }))
    dto: WorkerDto,
  ) {
    return this.serv.create(dto);
  }

  @Delete(':id')
  async deleteWarehouse(@Param('id') id: string) {
    return await this.serv.remove(Number(id));
  }
}
