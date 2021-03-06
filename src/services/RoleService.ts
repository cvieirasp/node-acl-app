import Role from '../models/Role';
import { RoleRepository } from '../repositories';

type RoleRequest = {
  name: string;
  description: string;
};

class RoleService {
  async create({ name, description }: RoleRequest): Promise<Role | Error> {
    const repo = RoleRepository();

    if (await repo.findOne({ name })) {
      return new Error('Role already exists');
    }

    const role = repo.create({ name, description });
    await repo.save(role);

    return role;
  }
}

export default RoleService;
