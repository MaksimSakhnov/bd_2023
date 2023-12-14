import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {VendorEntity} from "@entities/vendor/vendor.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([VendorEntity])
    ]
})
export class VendorModule {
}
