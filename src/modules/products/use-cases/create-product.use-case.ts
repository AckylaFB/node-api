import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entities/product';
import { ProductsRepository } from '../repositories/products.repository';

export class CreateProductUseCase {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute(data: CreateProductDto[]) {
    const products = data.map((value) => new Product(value));
    await this.productsRepository.create(products);
    return products;
  }
}
