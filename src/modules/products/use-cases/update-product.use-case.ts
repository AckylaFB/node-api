import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductsRepository } from '../repositories/products.repository';

export class UpdateProductUseCase {
  constructor(private readonly productsRepo: ProductsRepository) {}

  async execute(id: string, product: UpdateProductDto) {
    return this.productsRepo.update(id, product);
  }
}
