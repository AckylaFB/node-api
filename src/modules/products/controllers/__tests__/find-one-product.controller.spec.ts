import { describe, it, expect, vi } from 'vitest';
import { FindOneProductController } from '../find-one-product.controller';
import { FindOneProductUseCase } from '../../use-cases/find-one-product.use-case';

describe('FindOneProductController', () => {
  it('should return 200 status code with found product', async () => {
    const mockProduct = { id: '123', name: 'Test Product', price: 10, description: 'Test description' };
    const mockUseCase = {
      execute: vi.fn().mockResolvedValue(mockProduct),
    } as unknown as FindOneProductUseCase;

    const controller = new FindOneProductController(mockUseCase);

    const mockRequest = {
      params: { id: '123' },
    } as any;

    const mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as any;

    await controller.handle(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockProduct);
  });
});
