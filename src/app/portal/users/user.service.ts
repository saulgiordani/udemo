import { Injectable } from '@angular/core';
import { User, UserStateType } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [new User(123, "test", new Date(), new Date(), new Date(), UserStateType.ACTIVE)];

  constructor() { }

  loadUser(userId: number): User {
    return this.users[0];
  }

  saveUser(user: User) {
    this.users.splice(0, 1, user);
  }

  deleteUser(id: number) {
    this.users.splice(0, 1);
    console.log(this.users);
  }

}
