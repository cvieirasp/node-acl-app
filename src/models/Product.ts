import { Entity, Column } from 'typeorm';
import BaseModel from './BaseModel';

@Entity('products')
class Product extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}

export default Product;
