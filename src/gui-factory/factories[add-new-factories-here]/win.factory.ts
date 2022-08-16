import { WindowsButton } from '../classes/win-button.class';
import { WindowsCheckBox } from '../classes/win-checkbox.class';
import { GUIFactoryDecorator } from '../decorators/gui-factory.decorator';
import { Os } from '../enum/os.enum';
import { IGuiFactory } from '../interfaces/gui-factory.interface';

@GUIFactoryDecorator(Os.WIN)
export class WinGuiFactory implements IGuiFactory {
  createCheckBox(): WindowsCheckBox {
    return new WindowsCheckBox();
  }
  createButton(): WindowsButton {
    return new WindowsButton();
  }
}