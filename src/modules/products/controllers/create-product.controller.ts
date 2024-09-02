import { Request, Response } from 'express';

import { CreateProductUseCase } from '../use-cases/create-product.use-case';

export class CreateProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { products } = request.body;

    try {
      const result = await this.createProductUseCase.execute(products);

      return response.status(201).send(result);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
