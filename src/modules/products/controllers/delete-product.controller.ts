import { Request, Response } from 'express';
import { DeleteProductUseCase } from '../use-cases/delete-product.use-case';

export class DeleteProductController {
  constructor(private readonly deleteProductUseCase: DeleteProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.deleteProductUseCase.execute(id);

    return response.status(204).send();
  }
}
