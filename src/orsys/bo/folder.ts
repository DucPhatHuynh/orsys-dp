import { FSView } from '../gui/FSView';
import { Item } from './item';
import { ItemRef } from './item-ref';

export class Folder extends ItemRef {
  content: Item[] = [];

  constructor(name: string) {
    super(name);
  }

  getContent(): (Item)[] {
    return this.content;
  }

  getSize(): number {
    return this.content.reduce((acc, curr) => {
      return acc + curr.getSize();
    }, 0)
  }

  accept(visitor: FSView) {
    visitor.visit(this);
    this.content.forEach(el => {
      el.accept(visitor);
    })
  }
}
