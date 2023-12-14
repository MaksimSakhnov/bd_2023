import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import {ProductGroupEntity} from "@entities/productGroup/product-group.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductGroupEntity])
    ]
})
export class ProductGroupModule {
}
