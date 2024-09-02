import { BaseEntity } from '@/shared/entities/base-entity';
import { CreateProductDto } from '../dto/create-product.dto';

export class Product extends BaseEntity {
  private name: string;
  private description: string;
  private price: number;

  constructor(props: CreateProductDto) {
    super();
    this.name = props.name;
    this.description = props.description;
    this.price = props.price;
  }
}
