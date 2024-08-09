import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { mocksProducts } from 'src/mocks/products.mocks';

@Module({
  providers: [
    {
      provide: ProductsService,
      useValue: mocksProducts
    }
   ],
  controllers: [ProductsController],
})
export class ProductsModule {}
