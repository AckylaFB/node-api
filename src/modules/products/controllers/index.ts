import { CreateProductController } from './create-product.controller';
import { FindAllProductsController } from './find-all-products.controller';
import { FindOneProductController } from './find-one-product.controller';
import { UpdateProductController } from './update-product.controller';
import { DeleteProductController } from './delete-product.controller';

import * as useCases from '../use-cases';

const createProductController = new CreateProductController(
  useCases.createProductUseCase,
);
const findAllProductsController = new FindAllProductsController(
  useCases.findAllProductsUseCase,
);
const findOneProductController = new FindOneProductController(
  useCases.findOneProductUseCase,
);
const updateProductController = new UpdateProductController(
  useCases.updateProductUseCase,
);
const deleteProductController = new DeleteProductController(
  useCases.deleteProductUseCase,
);

export {
  createProductController,
  findAllProductsController,
  findOneProductController,
  updateProductController,
  deleteProductController,
};
