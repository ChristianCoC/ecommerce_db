import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { mockUsers } from 'src/mocks/users.mocks';

@Module({
  providers: [UsersService, UsersRepository],
  controllers: [UsersController]
})
export class UsersModule {}
