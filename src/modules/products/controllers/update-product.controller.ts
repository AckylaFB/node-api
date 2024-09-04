import { Request, Response } from 'express';
import { UpdateProductUseCase } from '../use-cases/update-product.use-case';
import { UpdateProductDto } from '../dto/update-product.dto';

export class UpdateProductController {
  constructor(private readonly updateProductUseCase: UpdateProductUseCase) {}

  async handle(
    request: Request<{ id: string }, unknown, UpdateProductDto>,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { name, price, description } = request.body;

    const product = await this.updateProductUseCase.execute(id, {
      name,
      price,
      description,
    });

    return response.status(200).json(product);
  }
}
