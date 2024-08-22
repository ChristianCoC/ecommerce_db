import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { Users } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }
  getUsers(page: number, limit: number) {
    return this.usersRepository.getUsers(page, limit);
  }
  getUserById(id: string) {
    return this.usersRepository.getUserById(id);
  }
  createUser(user: Users) {
    return this.usersRepository.createUser(user);
  }
  updateUser(id: string, user: Users) {
    return this.usersRepository.updateUser(id, user);
  }
  deleteUser(id: string) {
    return this.usersRepository.deleteUser(id);
  }
}
