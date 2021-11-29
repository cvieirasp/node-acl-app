import { hash } from 'bcryptjs';
import User from '../models/User';
import { UserRepository } from '../repositories';

type UserRequest = {
  username: string;
  password: string;
};

class UserService {
  async create({ password, username }: UserRequest): Promise<Error | User> {
    const existUser = await UserRepository().findOne({ username });

    if (existUser) {
      return new Error('User already exists');
    }

    const passwordHash = await hash(password, 8);
    const user = UserRepository().create({ username, password: passwordHash });
    await UserRepository().save(user);

    delete user.password;
    return user;
  }
}

export default UserService;
