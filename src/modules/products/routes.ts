import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  findAllProductsController,
  findOneProductController,
  updateProductController,
} from '.';
import { validateCreateProduct } from './middlewares/validate-create-product';

const productsRouter = Router();

productsRouter.get('/', (_, res) => findAllProductsController.handle(res));

productsRouter.get('/:id', (req, res) =>
  findOneProductController.handle(req, res),
);

productsRouter.post('/', validateCreateProduct, (req, res) =>
  createProductController.handle(req, res),
);

productsRouter.patch('/:id', (req, res) =>
  updateProductController.handle(req, res),
);

productsRouter.delete('/:id', (req, res) =>
  deleteProductController.handle(req, res),
);

export { productsRouter };
