import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FindOneProductUseCase } from '../find-one-product.use-case';
import { ProductsRepository } from '../../repositories/products.repository';
import { Product } from '../../entities/product';

describe('FindOneProductUseCase', () => {
  let findOneProductUseCase: FindOneProductUseCase;
  let productsRepositoryMock: ProductsRepository;

  beforeEach(() => {
    productsRepositoryMock = {
      findOne: vi.fn(),
    } as any;
    findOneProductUseCase = new FindOneProductUseCase(productsRepositoryMock);
  });

  it('should find and return a product', async () => {
    const productId = '123';
    const expectedProduct = new Product({
      name: 'Test Product',
      price: 10,
      description: 'Test Description',
    });

    (productsRepositoryMock.findOne as any).mockResolvedValue(expectedProduct);

    const result = await findOneProductUseCase.execute(productId);

    expect(productsRepositoryMock.findOne).toHaveBeenCalledWith(productId);
    expect(result).toEqual(expectedProduct);
  });
});
