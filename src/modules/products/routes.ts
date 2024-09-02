import { Router } from 'express';
import { createProductController, findAllProductsController } from '.';
import { validateCreateProduct } from './middlewares/validate-create-product';

const productsRouter = Router();

productsRouter.get('/', (_, res) => findAllProductsController.handle(res));

productsRouter.post('/create', validateCreateProduct, (req, res) =>
  createProductController.handle(req, res),
);

export { productsRouter };
