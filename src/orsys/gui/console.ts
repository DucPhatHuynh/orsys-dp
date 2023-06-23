import { Observer } from '../observable/observer';

export class Console implements Observer {
  update(arg: string): void {
    console.log(`nouvelle taille: ${arg}`);
  }
}
