import Role from '../models/Role';
import { PermissionRepository, RoleRepository } from '../repositories';

type RolePermissionRequest = {
  roleId: string;
  permissions: string[];
};

class RolePermissionService {
  async create({
    roleId,
    permissions,
  }: RolePermissionRequest): Promise<Role | Error> {
    const repo = RoleRepository();
    const role = await repo.findOne(roleId);

    if (!role) {
      return new Error('Role does not exists!');
    }

    const permissionsExists = await PermissionRepository().findByIds(
      permissions
    );

    role.permissions = permissionsExists;
    await repo.save(role);
    return role;
  }
}
export default RolePermissionService;
