import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) { }
  postLogin(email: string, password: string) {
    if (!email || !password) {
      throw new UnauthorizedException('Email and password are required');
    }
    const user = this.usersRepository.getUsers(Number(email), Number(password)).find(
      (user) => user.email === email
    );
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    console.log(user)
    return 'Login Successful';
  }
}
