import { v4 as uuidv4 } from 'uuid';

export abstract class Id {
  static new() {
    return uuidv4();
  }
}
