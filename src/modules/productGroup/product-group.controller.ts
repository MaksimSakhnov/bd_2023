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
import { ProductGroupService } from '../productGroup/product-group.service';
import { ProductGroupDto } from '../productGroup/product-group.dto';

@Controller('product_groups')
export class ProductGroupController {
  constructor(private serv: ProductGroupService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAllPGroups(@Req() req: Request) {
    return await this.serv.getAll();
  }

  @Post('/')
  async createPGroupMethod(
    @Body(new ValidationPipe({ transform: true }))
    productGroupDto: ProductGroupDto,
  ) {
    return this.serv.create(productGroupDto);
  }

  @Delete(':id')
  async deletePGroup(@Param('id') id: string) {
    return await this.serv.remove(Number(id));
  }
}
