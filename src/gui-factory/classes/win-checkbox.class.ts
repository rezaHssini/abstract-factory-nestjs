import { ICheckBox } from '../interfaces/checkbox.interface';

export class WindowsCheckBox implements ICheckBox {
  paint(): void {
    console.log('windows checkbox');
  }
}
