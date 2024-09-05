import { describe, it, expect, vi } from 'vitest';
import { DeleteProductController } from '../delete-product.controller';
import { DeleteProductUseCase } from '../../use-cases/delete-product.use-case';

describe('DeleteProductController', () => {
  it('should successfully delete a product and return 204 status code', async () => {
    const mockUseCase = {
      execute: vi.fn().mockResolvedValue(undefined),
    } as unknown as DeleteProductUseCase;

    const controller = new DeleteProductController(mockUseCase);

    const mockRequest = {
      params: { id: '123' },
    } as any;

    const mockResponse = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as any;

    await controller.handle(mockRequest, mockResponse);

    expect(mockUseCase.execute).toHaveBeenCalledWith('123');
    expect(mockResponse.status).toHaveBeenCalledWith(204);
    expect(mockResponse.send).toHaveBeenCalledWith();
  });
});
