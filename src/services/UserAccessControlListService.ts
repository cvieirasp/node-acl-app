import User from '../models/User';
import {
  PermissionRepository,
  RoleRepository,
  UserRepository,
} from '../repositories';

type UserACLRequest = {
  userId: string;
  roles: string[];
  permissions: string[];
};

export class UserAccessControlListService {
  async create({
    userId,
    roles,
    permissions,
  }: UserACLRequest): Promise<User | Error> {
    const repo = UserRepository();
    const user = await repo.findOne(userId);

    if (!user) {
      return new Error('User does not exists!');
    }

    const permissionsList = await PermissionRepository().findByIds(permissions);
    const rolesList = await RoleRepository().findByIds(roles);

    user.permissions = permissionsList;
    user.roles = rolesList;

    repo.save(user);

    delete user.password;
    return user;
  }
}

export default UserAccessControlListService;
