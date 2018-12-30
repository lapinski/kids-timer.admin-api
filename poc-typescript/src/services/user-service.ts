import { User, UserCreationRequest } from '../models/user';
import { ProvideSingleton } from '../ioc';

@ProvideSingleton(UserService)
export class UserService {

    public async get(id: number): Promise<User> {
        return undefined;
    }

    public create(request: UserCreationRequest) {

    }
}
