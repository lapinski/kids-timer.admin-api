import { IUserRepository } from './types';
import { IUser } from '../entities/user';
import { CreateUserRequest } from '../models/create-user-request';

export class MemoryUserRepository implements IUserRepository {

  private readonly _users: IUser[];
  private _currentId: number;

  constructor() {
    this._users = [];
    this._currentId = 0;
  }

  create(entity: CreateUserRequest): Promise<IUser> {

    this._currentId += 1;

    const newUser = {
      id: this._currentId,
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.lastName,
    };

    this._users.push(newUser);

    return Promise.resolve(newUser);
  }

  get(id: number): Promise<IUser> {
    const user = this._users.find(user => user.id === id);
    return Promise.resolve(user);
  }

  getAll(): Promise<IUser[]> {
    return Promise.resolve(this._users);
  }

}
