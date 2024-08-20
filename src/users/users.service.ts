import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }
  getUsers(page: number, limit: number) {
    return this.usersRepository.getUsers(page, limit);
  }
  getUserById(id: string) {
    return this.usersRepository.getUserById(id);
  }
  createUser(user: User) {
    return this.usersRepository.createUser(user);
  }
  updateUser(id: string, user: User) {
    return this.usersRepository.updateUser(id, user);
  }
  deleteUser(id: string) {
    return this.usersRepository.deleteUser(id);
  }
}
