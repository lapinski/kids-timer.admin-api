import { User, UserCreationRequest } from '../models/user';
import { User as DbUser } from '../entities/user';
import { ProvideSingleton } from '../ioc';
import { Repository } from 'typeorm';
import { getRepository } from '../database';

@ProvideSingleton(UserService)
export class UserService {

    private _userRepository: Repository<DbUser>;

    public async get(id: number): Promise<User> {
        // TODO: Extract instantiation to IOC
        this._userRepository = await getRepository<DbUser>(DbUser);
        return this._userRepository.findOne(id);
    }

    public async create(request: UserCreationRequest) {
        // TODO: Extract instantiation to IOC (factory function maybe?)
        this._userRepository = await getRepository<DbUser>(DbUser);

        const newUser = new DbUser();
        newUser.firstName = request.firstName;
        newUser.lastName = request.lastName;
        newUser.email = request.email;

        return this._userRepository.save(newUser);
    }
}
