import { Module } from '@nestjs/common';
import { StorageMethodModule } from '@entities/storageMethod/storage-method.module';
import { TypeOrmModule } from '@db/typeorm.module';
import { ConfigModule } from './config.module';
import { ProductGroupModule } from '@entities/productGroup/product-group.module';
import { ManufacturerModule } from '@entities/manufacturer/manufacturer.module';
import { ProductModule } from '@entities/product/product.module';
import { WarehouseModule } from '@entities/warehouse/warehouse.module';
import { WorkerModule } from '@entities/worker/worker.module';
import { BillModule } from '@entities/bill/bill.module';
import { IncomingProductModule } from '@entities/incomingProduct/incoming-product.module';
import { ProductInWarehouseModule } from '@entities/productInWarehouse/productInWarehouse.module';
import { TransferModule } from '@entities/transfer/transfer.module';
import { OutgoingProductModule } from '@entities/outgoingProduct/outgoing-product.module';
import { VendorModule } from '@entities/vendor/vendor.module';

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
  ],
})
export class AppModule {}
