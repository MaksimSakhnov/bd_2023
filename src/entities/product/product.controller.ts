import { Controller, ValidationPipe } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ProductEntity } from '@entities/product/product.entity';
import { ProductService } from '@entities/product/product.service';
import { ProductDto } from '@entities/product/product.dto';

@Crud({
  model: {
    type: ProductEntity,
  },
  validation: new ValidationPipe({ transform: true }),
})
@Controller('products')
export class ProductController implements CrudController<ProductEntity> {
  constructor(public service: ProductService) {}
}
