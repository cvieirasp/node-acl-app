import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  async create(request: Request, response: Response) {
    const { name, description, price } = request.body;
    const productService = new ProductService();

    const product = await productService.create({
      name,
      description,
      price,
    });

    return response.json(product);
  }

  async list(request: Request, response: Response) {
    const productService = new ProductService();
    const products = await productService.list();
    return response.json(products);
  }
}

export default ProductController;
