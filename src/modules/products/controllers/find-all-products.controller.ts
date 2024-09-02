import { Response } from 'express';
import { FindAllProductsUseCase } from '../use-cases/find-all-products.use-case';

export class FindAllProductsController {
  constructor(
    private readonly findAllProductsUseCase: FindAllProductsUseCase,
  ) {}

  async handle(res: Response) {
    try {
      const products = await this.findAllProductsUseCase.execute();
      return res.status(200).send(products);
    } catch (err) {
      return res.status(404).send({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
