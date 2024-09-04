import { PrismaClient } from '@prisma/client';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

export class PrismaRepository
  extends PrismaClient
  implements ProductsRepository
{
  constructor() {
    super();
  }

  async findAll() {
    return this.product.findMany();
  }

  async findOne(id: string) {
    return this.product.findUnique({ where: { id } });
  }

  async create(products: CreateProductDto[]) {
    await this.product.createMany({ data: products });
  }

  async update(id: string, product: UpdateProductDto) {
    return this.product.update({ where: { id }, data: product });
  }

  async delete(id: string) {
    return this.product.delete({ where: { id } });
  }
}
