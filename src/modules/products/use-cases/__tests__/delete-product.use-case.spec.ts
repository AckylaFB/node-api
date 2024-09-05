import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DeleteProductUseCase } from '../delete-product.use-case';
import { ProductsRepository } from '../../repositories/products.repository';

describe('DeleteProductUseCase', () => {
  let deleteProductUseCase: DeleteProductUseCase;
  let productsRepositoryMock: ProductsRepository;

  beforeEach(() => {
    productsRepositoryMock = {
      delete: vi.fn(),
    } as any;
    deleteProductUseCase = new DeleteProductUseCase(productsRepositoryMock);
  });

  it('should delete a product and return the result', async () => {
    const productId = '123';
    const expectedResult = true;

    (productsRepositoryMock.delete as any).mockResolvedValue(expectedResult);

    const result = await deleteProductUseCase.execute(productId);

    expect(productsRepositoryMock.delete).toHaveBeenCalledWith(productId);
    expect(result).toBe(expectedResult);
  });
});
