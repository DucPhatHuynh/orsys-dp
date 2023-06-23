import { FSView } from '../gui/FSView';
import { ItemRef } from './item-ref';

export class File extends ItemRef {
  constructor(name: string, private size: number) {
    super(name);
  }

  getSize(): number {
    return this.size;
  }

  accept(visitor: FSView) {
    visitor.visit(this);
  }

  setTaille(taille: number): void {
    this.size = taille;
    this.notify(this.size);
  }
}
