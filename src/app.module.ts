import { Module } from '@nestjs/common';
import { StorageMethodModule } from './modules/storageMethod/storage-method.module';
import { TypeOrmModule } from '@db/typeorm.module';
import { ConfigModule } from './config.module';
import { ProductGroupModule } from './modules/productGroup/product-group.module';
import { ManufacturerModule } from './modules/manufacturer/manufacturer.module';
import { ProductModule } from '@modules/product/product.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';
import { WorkerModule } from '@modules/worker/worker.module';
import { BillModule } from './modules/bill/bill.module';
import { IncomingProductModule } from './modules/incomingProduct/incoming-product.module';
import { ProductInWarehouseModule } from './modules/productInWarehouse/productInWarehouse.module';
import { TransferModule } from './modules/transfer/transfer.module';
import { OutgoingProductModule } from './modules/outgoingProduct/outgoing-product.module';
import { VendorModule } from './modules/vendor/vendor.module';
import { UserModule } from '@modules/user/user.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule,
    StorageMethodModule,
    ProductGroupModule,
    ManufacturerModule,
    VendorModule,
    ProductModule,
    WarehouseModule,
    WorkerModule,
    BillModule,
    IncomingProductModule,
    ProductInWarehouseModule,
    TransferModule,
    OutgoingProductModule,
    UserModule,
  ],
})
export class AppModule {}
