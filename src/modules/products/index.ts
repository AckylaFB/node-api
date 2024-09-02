import { CreateProductController } from './controllers/create-product.controller';
import { FindAllProductsController } from './controllers/find-all-products.controller';
import { ProductsRepository } from './repositories/products.repository';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { FindAllProductsUseCase } from './use-cases/find-all-products.use-case';

const productsRepository = new ProductsRepository();

const findAllProductsUseCase = new FindAllProductsUseCase(productsRepository);
const findAllProductsController = new FindAllProductsController(
  findAllProductsUseCase,
);

const createProductUseCase = new CreateProductUseCase(productsRepository);
const createProductController = new CreateProductController(
  createProductUseCase,
);

export {
  findAllProductsController,
  findAllProductsUseCase,
  createProductController,
  createProductUseCase,
};
