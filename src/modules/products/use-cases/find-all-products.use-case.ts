import { ProductsRepository } from '../repositories/products.repository';

export class FindAllProductsUseCase {
  constructor(private readonly productsRepo: ProductsRepository) {}

  async execute() {
    return this.productsRepo.findAll();
  }
}
