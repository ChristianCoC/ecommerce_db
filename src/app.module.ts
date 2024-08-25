import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    load: [typeormConfig],
  }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('typeorm'),
  }),
    ProductsModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
