import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import BaseModel from './BaseModel';
import Permission from './Permission';

@Entity('roles')
class Role extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'permissions_roles',
    joinColumns: [{ name: 'role_id' }],
    inverseJoinColumns: [{ name: 'permission_id' }],
  })
  permissions: Permission[];
}

export default Role;
