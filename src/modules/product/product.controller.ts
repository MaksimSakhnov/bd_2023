import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from '../product/product.service';
import { ProductDto } from '../product/product.dto';

@Controller('products')
export class ProductController {
  constructor(public serv: ProductService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAllPGroups(@Query('search') search: string | undefined) {
    return await this.serv.getAll(search);
  }

  @Get('report')
  async getProductCountsByGroup(): Promise<
    { product_group_id: number; count: number }[]
  > {
    return this.serv.getProductCountByProductGroup();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.serv.findOne(Number(id));
  }

  @Post('/')
  async createPGroupMethod(
    @Body(new ValidationPipe({ transform: true }))
    dto: ProductDto,
  ) {
    console.log(dto);
    return this.serv.create(dto);
  }

  @Delete(':id')
  async deletePGroup(@Param('id') id: string) {
    return await this.serv.remove(Number(id));
  }
}
