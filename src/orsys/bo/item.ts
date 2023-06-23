import { FSView } from '../gui/FSView';
import { Observable } from '../observable/observable';

export abstract class Item extends Observable {
  creationDate: Date;

  protected constructor(public name: string) {
    super();
    this.creationDate = new Date();
  }

  getSize(): number {
    return 0;
  };

  abstract accept(visitor: FSView): void;
}
