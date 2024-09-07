import { CreateProductUseCase } from './create-product.use-case';
import { FindAllProductsUseCase } from './find-all-products.use-case';
import { FindOneProductUseCase } from './find-one-product.use-case';
import { UpdateProductUseCase } from './update-product.use-case';
import { DeleteProductUseCase } from './delete-product.use-case';

import { PrismaRepository } from '../repositories/prisma-repository';

const productsRepository = new PrismaRepository();

const createProductUseCase = new CreateProductUseCase(productsRepository);
const findAllProductsUseCase = new FindAllProductsUseCase(productsRepository);
const findOneProductUseCase = new FindOneProductUseCase(productsRepository);
const updateProductUseCase = new UpdateProductUseCase(productsRepository);
const deleteProductUseCase = new DeleteProductUseCase(productsRepository);

export {
  createProductUseCase,
  findAllProductsUseCase,
  findOneProductUseCase,
  updateProductUseCase,
  deleteProductUseCase,
};
