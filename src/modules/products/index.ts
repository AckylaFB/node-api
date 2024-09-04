import { CreateProductController } from './controllers/create-product.controller';
import { DeleteProductController } from './controllers/delete-product.controller';
import { FindAllProductsController } from './controllers/find-all-products.controller';
import { FindOneProductController } from './controllers/find-one-product.controller';
import { UpdateProductController } from './controllers/update-product.controller';
import { PrismaRepository } from './repositories/prisma-repository';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { DeleteProductUseCase } from './use-cases/delete-product.use-case';
import { FindAllProductsUseCase } from './use-cases/find-all-products.use-case';
import { FindOneProductUseCase } from './use-cases/find-one-product.use-case';
import { UpdateProductUseCase } from './use-cases/update-product.use-case';

const productsRepository = new PrismaRepository();

// CREATE
const createProductUseCase = new CreateProductUseCase(productsRepository);
const createProductController = new CreateProductController(
  createProductUseCase,
);

// READ
const findAllProductsUseCase = new FindAllProductsUseCase(productsRepository);
const findAllProductsController = new FindAllProductsController(
  findAllProductsUseCase,
);
const findOneProductUseCase = new FindOneProductUseCase(productsRepository);
const findOneProductController = new FindOneProductController(
  findOneProductUseCase,
);

// UPDATE
const updateProductUseCase = new UpdateProductUseCase(productsRepository);
const updateProductController = new UpdateProductController(
  updateProductUseCase,
);

// DELETE
const deleteProductUseCase = new DeleteProductUseCase(productsRepository);
const deleteProductController = new DeleteProductController(
  deleteProductUseCase,
);

export {
  findAllProductsController,
  findAllProductsUseCase,
  findOneProductController,
  findOneProductUseCase,
  createProductController,
  createProductUseCase,
  updateProductController,
  updateProductUseCase,
  deleteProductController,
  deleteProductUseCase,
};
