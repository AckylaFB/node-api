import { describe, it, expect, vi } from 'vitest';
import { UpdateProductController } from '../update-product.controller';
import { UpdateProductUseCase } from '../../use-cases/update-product.use-case';

describe('UpdateProductController', () => {
  it('should return 200 status code with updated product', async () => {
    const mockProduct = { id: '123', name: 'Updated Product', price: 10, description: 'Updated description' };
    const mockUseCase = {
      execute: vi.fn().mockResolvedValue(mockProduct),
    } as unknown as UpdateProductUseCase;

    const controller = new UpdateProductController(mockUseCase);

    const mockRequest = {
      params: { id: '123' },
      body: { name: 'Updated Product', price: 10, description: 'Updated description' },
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
