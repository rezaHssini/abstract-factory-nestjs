import { MacButton } from '../classes/mac-button.class';
import { MacCheckBox } from '../classes/mac-checkbox.class';
import { GUIFactoryDecorator } from '../decorators/gui-factory.decorator';
import { Os } from '../enum/os.enum';
import { IGuiFactory } from '../interfaces/gui-factory.interface';

@GUIFactoryDecorator(Os.MAC)
export class MacGuiFactory implements IGuiFactory {
  createCheckBox(): MacCheckBox {
    return new MacCheckBox();
  }
  createButton(): MacButton {
    return new MacButton();
  }
}
