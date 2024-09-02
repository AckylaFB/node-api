import { PrismaService } from '@/infra/database/prisma-service';
import { Product } from '../entities/product';

export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create(products: Product[]) {
    return this.prisma.product.createMany({ data: products });
  }

  async update(id: string, product: Product) {
    return this.prisma.product.update({ where: { id }, data: product });
  }

  async delete(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
