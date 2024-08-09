import { Injectable } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { mockUsers } from "src/mocks/users.mocks";

@Injectable()
export class UsersRepository {
  private users: User[] = mockUsers;
  getUsers(): User[] {
    return this.users;
  }
  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }
  createUser(newUser: User): User[] {
    this.users.push(newUser);
    return this.users;
  }
  updateUser(updateUser: User): User[] {
    this.users = this.users.map((user) => (user.id === updateUser.id ? updateUser : user));
    return this.users;
  }
  deleteUser(id: number): User[] {
    this.users = this.users.filter((user) => user.id !== id);
    return this.users;
  }
}