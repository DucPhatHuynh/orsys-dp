import { Observer } from './observer';

export class Observable {
  observers: Observer[] = [];

  notify(arg: any): void {
    this.observers.forEach(observer => {
      observer.update(arg);
    });
  };
  register(observer: Observer): void {
    this.observers.push(observer);
  };
}
