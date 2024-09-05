import { describe, it, expect, beforeEach, vi } from 'vitest';
import { UpdateProductUseCase } from '../update-product.use-case';
import { ProductsRepository } from '../../repositories/products.repository';
import { UpdateProductDto } from '../../dto/update-product.dto';

describe('UpdateProductUseCase', () => {
  let updateProductUseCase: UpdateProductUseCase;
  let productsRepositoryMock: ProductsRepository;

  beforeEach(() => {
    productsRepositoryMock = {
      update: vi.fn(),
    } as any;
    updateProductUseCase = new UpdateProductUseCase(productsRepositoryMock);
  });

  it('should update a product and return the result', async () => {
    const productId = '123';
    const updateProductDto: UpdateProductDto = {
      name: 'Updated Product',
      price: 15,
      description: 'Updated Description',
    };

    (productsRepositoryMock.update as any).mockResolvedValue(updateProductDto);

    const result = await updateProductUseCase.execute(
      productId,
      updateProductDto,
    );

    expect(productsRepositoryMock.update).toHaveBeenCalledWith(
      productId,
      updateProductDto,
    );
    expect(result).toEqual(updateProductDto);
  });
});
