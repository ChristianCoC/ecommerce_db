import { Injectable } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { usersMock } from "src/mocks/users.mocks";

@Injectable()
export class UsersRepository {
  private users: User[] = usersMock;
  getUsers() {
    const omitPassword = this.users.map((user) => {
      const { password, ...rest } = user;
      return rest;
    }) 
    return omitPassword;
  }
  getUserById(id: string) {
    const userId = this.users.find((user) => user.id === Number(id));
    const { password, ...rest } = userId;
    return rest;
  }
  createUser(user: User) {
    this.users.push(user);
    const message = `User with id ${user.id} created`;
    return message;
  }
  updateUser(id: string, user: User) {
    const index = this.users.findIndex((user) => user.id === Number(id));
    this.users[index] = user;
    const message = `User with id ${user.id} updated`;
    return message;
  }
  deleteUser(id: string) {
    const index = this.users.findIndex((user) => user.id === Number(id));
    const deletedUser = this.users.splice(index, 1);
    const message = `User with id ${deletedUser[0].id} deleted`;
    return message;
  }
}