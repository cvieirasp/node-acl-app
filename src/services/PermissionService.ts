import Permission from '../models/Permission';
import { PermissionRepository } from '../repositories';

type PermissionRequest = {
  name: string;
  description: string;
};

class PermissionService {
  async create({
    name,
    description,
  }: PermissionRequest): Promise<Permission | Error> {
    const repo = PermissionRepository();

    if (await repo.findOne({ name })) {
      return new Error('Permission already exists');
    }

    const permission = repo.create({ name, description });
    await repo.save(permission);
    return permission;
  }
}

export default PermissionService;
