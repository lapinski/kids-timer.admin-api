import { Get, Post, Route, Body, Query, SuccessResponse, Controller } from 'tsoa';
import HttpStatus from 'http-status-codes';
import { UserService } from '../services/user-service';
import { User, UserCreationRequest } from '../models/user';

@Route('Users')
export class UsersController extends Controller {

    private _userService:UserService;

    constructor(userService:UserService) {
        super();
        this._userService = userService;
    }

    @Get('{id}')
    public async getUser(id: number, @Query() name: string): Promise<User> {
        return await this._userService.get(id);
    }

    @SuccessResponse(HttpStatus.CREATED, 'Created')
    @Post()
    public async createUser(@Body() requestBody: UserCreationRequest): Promise<void> {
        this._userService.create(requestBody);
        this.setStatus(HttpStatus.CREATED);
        return Promise.resolve();
    }
};
