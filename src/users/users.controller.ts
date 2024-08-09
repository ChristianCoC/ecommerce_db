import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers(): User[] {
    return this.usersService.getUsers();
  }
  @Get(':id')
  getUserById(@Param('id') id: number): User {
    return this.usersService.getUserById(id);
  }
  @Post()
  createUser(@Body() newUser: User): User[] {
    return this.usersService.createUser(newUser);
  }
  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUser: User): User[] {
    return this.usersService.updateUser(updateUser);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number): User[] {
    return this.usersService.deleteUser(id);
  }
}
