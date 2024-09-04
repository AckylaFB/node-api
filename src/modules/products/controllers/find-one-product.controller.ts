import { Request, Response } from 'express';
import { FindOneProductUseCase } from '../use-cases/find-one-product.use-case';

export class FindOneProductController {
  constructor(private readonly findOneProductUseCase: FindOneProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const product = await this.findOneProductUseCase.execute(id);

    return response.status(200).json(product);
  }
}
