import { ProductsRepository } from '../repositories/products.repository';

export class FindOneProductUseCase {
  constructor(private readonly productsRepo: ProductsRepository) {}

  async execute(id: string) {
    return this.productsRepo.findOne(id);
  }
}
