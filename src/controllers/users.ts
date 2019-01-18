import { Get, Post, Route, Body, Query, SuccessResponse, Controller } from 'tsoa';
import * as HttpStatus from 'http-status-codes';
import { RepositoryTypes, IUserRepository } from '../repositories/types';
import { CreateUserRequest } from '../models/create-user-request';
import { provideSingleton, inject } from '../ioc';
import { IUser } from '../entities/user';

@Route('Users')
@provideSingleton(UsersController)
export class UsersController extends Controller {

  private _userRepository: IUserRepository;

  constructor(@inject(RepositoryTypes.IUserRepository) userService: IUserRepository) {
    super();
    this._userRepository = userService;
  }

  @Get()
  public async getUsers(): Promise<IUser[]> {
    return await this._userRepository.getAll();
  }

  @Get('{id}')
  public async getUser(id: number, @Query() name: string): Promise<IUser> {
    return await this._userRepository.get(id);
  }

  @SuccessResponse(HttpStatus.CREATED, 'Created')
  @Post()
  public async createUser(@Body() requestBody: CreateUserRequest): Promise<void> {
    this._userRepository.create(requestBody);
    this.setStatus(HttpStatus.CREATED);
    return Promise.resolve();
  }
}
