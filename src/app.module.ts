import {Module} from '@nestjs/common';
import {StorageMethodModule} from "./entities/storageMethod/storage-method.module";
import {TypeOrmModule} from "./db/typeorm.module";
import {ConfigModule} from "./config.module";
import {ProductGroupModule} from "@entities/productGroup/product-group.module";
import {ManufacturerModule} from "@entities/manufacturer/manufacturer.module";
import {ProductModule} from "@entities/product/product.module";

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule,
        StorageMethodModule,
        ProductGroupModule,
        ManufacturerModule,
        ProductModule
    ],
})
export class AppModule {
}
