import { Id } from '@/shared/value-objects';

export abstract class BaseEntity {
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor() {
    this.id = Id.new();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
