import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FindAllProductsUseCase } from '../find-all-products.use-case';
import { ProductsRepository } from '../../repositories/products.repository';
import { Product } from '../../entities/product';

describe('FindAllProductsUseCase', () => {
  let findAllProductsUseCase: FindAllProductsUseCase;
  let productsRepositoryMock: ProductsRepository;

  beforeEach(() => {
    productsRepositoryMock = {
      findAll: vi.fn(),
    } as any;
    findAllProductsUseCase = new FindAllProductsUseCase(productsRepositoryMock);
  });

  it('should find and return all products', async () => {
    const expectedProducts = [
      new Product({
        name: 'Product 1',
        price: 10,
        description: 'Description 1',
      }),
      new Product({
        name: 'Product 2',
        price: 20,
        description: 'Description 2',
      }),
    ];

    (productsRepositoryMock.findAll as any).mockResolvedValue(expectedProducts);

    const result = await findAllProductsUseCase.execute();

    expect(productsRepositoryMock.findAll).toHaveBeenCalled();
    expect(result).toEqual(expectedProducts);
  });
});
