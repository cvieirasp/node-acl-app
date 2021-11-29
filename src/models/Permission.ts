import { Column, Entity } from 'typeorm';
import BaseModel from './BaseModel';

@Entity('permissions')
class Permission extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;
}

export default Permission;
