import { BaseEntity } from '@/shared/entities/base-entity';
import { CreateProductDto } from '../dto/create-product.dto';

export class Product extends BaseEntity {
  name: string;
  description: string;
  price: number;

  constructor(props: CreateProductDto) {
    super();
    this.name = props.name;
    this.description = props.description;
    this.price = props.price;
  }
}
