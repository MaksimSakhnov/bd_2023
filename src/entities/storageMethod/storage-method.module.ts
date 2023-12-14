import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {StorageMethodEntity} from './storage-method.entity'

@Module({
    imports: [
        TypeOrmModule.forFeature([StorageMethodEntity])
    ]
})
export class StorageMethodModule {
}
