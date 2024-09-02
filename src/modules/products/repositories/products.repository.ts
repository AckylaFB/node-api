import { Product } from '../entities/product';

export class ProductsRepository {
  private readonly products: Product[];

  constructor() {
    this.products = [];
  }

  async findAll() {
    return this.products;
  }

  async findOne(id: string) {
    return this.products.find((p) => p.id === id);
  }

  async create(product: Product[]) {
    return this.products.concat(product);
  }
}
