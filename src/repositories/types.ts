import { IUser } from '../entities/user';
import { ITimeEntry } from '../entities/time-entry';
import { CreateUserRequest } from '../models/create-user-request';
import { CreateTimeEntryRequest } from '../models/create-time-entry-request';

export interface IUserRepository {
  get(id: number): Promise<IUser>;
  getAll(): Promise<IUser[]>;
  create(entity: CreateUserRequest): Promise<IUser>;
}

export interface ITimeEntryRepository {
  get(id: number): Promise<ITimeEntry>;
  getByUser(userId: number): Promise<ReadonlyArray<ITimeEntry>>;
  create(entity: CreateTimeEntryRequest): Promise<ITimeEntry>;
}

export const RepositoryTypes = {
  IUserRepository: Symbol.for('IUserRepository'),
  ITimeEntryRepository: Symbol.for('ITimeEntryRepository'),
};
