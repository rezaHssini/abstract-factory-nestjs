import { ICheckBox } from '../interfaces/checkbox.interface';

export class MacCheckBox implements ICheckBox {
  paint(): void {
    console.log('mac checkbox');
  }
}
