import { IButton } from '../interfaces/button.interface';

export class WindowsButton implements IButton {
  paint(): void {
    console.log('windows button');
  }
}
