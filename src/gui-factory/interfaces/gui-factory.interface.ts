import { IButton } from './button.interface';
import { ICheckBox } from './checkbox.interface';

export interface IGuiFactory {
  createButton: () => IButton;
  createCheckBox: () => ICheckBox;
}
