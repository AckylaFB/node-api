import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CreateProductUseCase } from '../create-product.use-case';
import { ProductsRepository } from '../../repositories/products.repository';
import { CreateProductDto } from '../../dto/create-product.dto';
import { Product } from '../../entities/product';

describe('CreateProductUseCase', () => {
  let createProductUseCase: CreateProductUseCase;
  let productsRepositoryMock: ProductsRepository;

  beforeEach(() => {
    productsRepositoryMock = {
      create: vi.fn(),
    } as any;
    createProductUseCase = new CreateProductUseCase(productsRepositoryMock);
  });

  it('should create products and return them with correct properties', async () => {
    const createProductDtos: CreateProductDto[] = [
      { name: 'Product 1', price: 10, description: 'Description 1' },
      { name: 'Product 2', price: 20, description: 'Description 2' },
    ];

    const result = await createProductUseCase.execute(createProductDtos);

    expect(result).toHaveLength(createProductDtos.length);
    result.forEach((product, index) => {
      expect(product).toBeInstanceOf(Product);
      expect(product.name).toBe(createProductDtos[index].name);
      expect(product.price).toBe(createProductDtos[index].price);
      expect(product.description).toBe(createProductDtos[index].description);
    });
  });

  it('should call the repository to create products', async () => {
    const createProductDtos: CreateProductDto[] = [
      { name: 'Product 1', price: 10, description: 'Description 1' },
    ];

    await createProductUseCase.execute(createProductDtos);

    expect(productsRepositoryMock.create).toHaveBeenCalledTimes(1);
    expect(productsRepositoryMock.create).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Product 1',
          price: 10,
          description: 'Description 1',
        }),
      ]),
    );
  });
});
