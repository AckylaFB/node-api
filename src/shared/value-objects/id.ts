import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

export class Id {
  private readonly value: string;

  constructor(value?: string) {
    if (value) {
      if (!Id.isValid(value)) {
        throw new Error('Invalid UUID format');
      }
      this.value = value;
    } else {
      this.value = uuidv4();
    }
  }

  static isValid(value: string): boolean {
    return uuidValidate(value);
  }

  static generate(): string {
    return new Id().toString();
  }

  toString(): string {
    return this.value;
  }

  equals(other: Id): boolean {
    return this.value === other.value;
  }
}
