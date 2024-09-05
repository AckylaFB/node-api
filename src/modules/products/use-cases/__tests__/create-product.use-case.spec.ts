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

  it('should create products and return them', async () => {
    const createProductDtos: CreateProductDto[] = [
      { name: 'Product 1', price: 10, description: 'Description 1' },
      { name: 'Product 2', price: 20, description: 'Description 2' },
    ];

    const createdProducts = createProductDtos.map((dto) => new Product(dto));

    (productsRepositoryMock.create as any).mockResolvedValue(undefined);

    const result = await createProductUseCase.execute(createProductDtos);

    expect(productsRepositoryMock.create).toHaveBeenCalledWith(
      expect.arrayContaining([expect.any(Product), expect.any(Product)]),
    );
    expect(result).toEqual(createdProducts);
  });
});
