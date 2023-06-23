import { FSView } from '../gui/FSView';
import { Item } from './item';
import { ItemRef } from './item-ref';

export class Link extends Item {
  constructor(name: string, public reference: ItemRef) {
    super(name);
    this.creationDate = new Date();
  }

  accept(visitor: FSView) {
    visitor.visit(this);
  }
}
