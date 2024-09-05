import { describe, it, expect, vi } from 'vitest';
import { FindAllProductsController } from '../find-all-products.controller';
import { FindAllProductsUseCase } from '../../use-cases/find-all-products.use-case';

describe('FindAllProductsController', () => {
  it('should return 200 status code with all products', async () => {
    const mockProducts = [
      { id: '1', name: 'Product 1', price: 10, description: 'Description 1' },
      { id: '2', name: 'Product 2', price: 20, description: 'Description 2' },
    ];
    const mockUseCase = {
      execute: vi.fn().mockResolvedValue(mockProducts),
    } as unknown as FindAllProductsUseCase;

    const controller = new FindAllProductsController(mockUseCase);

    const mockResponse = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as any;

    await controller.handle(mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith(mockProducts);
  });

  it('should return 404 status code with error message when an error occurs', async () => {
    const mockError = new Error('Test error');
    const mockUseCase = {
      execute: vi.fn().mockRejectedValue(mockError),
    } as unknown as FindAllProductsUseCase;

    const controller = new FindAllProductsController(mockUseCase);

    const mockResponse = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as any;

    await controller.handle(mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith({
      message: 'Test error',
    });
  });
});
