import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }
  getUsers(): User[] {
    return this.usersRepository.getUsers();
  }
  getUserById(id: number): User {
    return this.usersRepository.getUserById(id);
  }
  createUser(newUser: User): User[] {
    return this.usersRepository.createUser(newUser);
  }
  updateUser(updateUser: User): User[] {
    return this.usersRepository.updateUser(updateUser);
  }
  deleteUser(id: number): User[] {
    return this.usersRepository.deleteUser(id);
  }
}
