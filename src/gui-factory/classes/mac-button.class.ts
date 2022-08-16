import { IButton } from '../interfaces/button.interface';

export class MacButton implements IButton {
  paint(): void {
    console.log('mac button');
  }
}
