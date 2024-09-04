import { ProductsRepository } from '../repositories/products.repository';

export class DeleteProductUseCase {
  constructor(private readonly productsRepo: ProductsRepository) {}

  async execute(id: string) {
    return this.productsRepo.delete(id);
  }
}
