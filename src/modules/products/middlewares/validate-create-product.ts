import { Request, Response, NextFunction } from 'express';
import { CreateProductDto } from '../dto/create-product.dto';

export function validateCreateProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { products } = req.body;

  if (!Array.isArray(products)) {
    return res.status(400).json({ message: 'Products must be an array' });
  }

  const requiredFields: (keyof CreateProductDto)[] = [
    'name',
    'description',
    'price',
  ];
  const errors: Array<{
    index: number;
    missingFields: (keyof CreateProductDto)[];
  }> = [];

  products.forEach((product, index) => {
    const missingFields = requiredFields.filter((field) => !(field in product));
    if (missingFields.length > 0) {
      errors.push({ index, missingFields });
    }
  });

  if (errors.length > 0) {
    return res.status(400).json({
      message: 'Validation failed',
      errors,
    });
  }

  next();
}
