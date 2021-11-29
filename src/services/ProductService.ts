import Product from '../models/Product';
import { ProductRepository } from '../repositories';

type ProductRequest = {
  name: string;
  description: string;
  price: number;
};

class ProductService {
  async create({ name, description, price }: ProductRequest) {
    const product = ProductRepository().create({
      name,
      description,
      price,
    });

    await ProductRepository().save(product);

    return product;
  }

  async list(): Promise<Product[]> {
    const products = await ProductRepository().find();
    return products;
  }
}

export default ProductService;
