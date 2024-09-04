import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product';

export interface ProductsRepository {
  findAll: () => Promise<Product[]>;

  findOne: (id: string) => Promise<Product | null>;

  create: (products: CreateProductDto[]) => Promise<void>;

  update: (id: string, product: UpdateProductDto) => Promise<Product>;

  delete: (id: string) => Promise<Product>;
}
