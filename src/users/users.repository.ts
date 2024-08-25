import { Injectable } from "@nestjs/common";
import { Users } from "src/entities/user.entity";

@Injectable()
export class UsersRepository {
  private users: Users[];
  getUsers(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const omitPassword = this.users.map((user) => {
      const { password, ...rest } = user;
      return rest;
    }) 
    return omitPassword.slice(startIndex, endIndex);
  }
  getUserById(id: string) {
    const userId = this.users.find((user) => user.id === (id));
    const { password, ...rest } = userId;
    return rest;
  }
  createUser(user: Users): Users | string {
    this.users.push(user);
    const message = `User with id ${user.id} created`;
    return message;
  }
  updateUser(id: string, user: Users): Users | string {
    const index = this.users.findIndex((user) => user.id === (id));
    this.users[index] = user;
    const message = `User with id ${user.id} updated`;
    return message;
  }
  deleteUser(id: string) {
    const index = this.users.findIndex((user) => user.id === (id));
    const deletedUser = this.users.splice(index, 1);
    const message = `User with id ${deletedUser[0].id} deleted`;
    return message;
  }
}