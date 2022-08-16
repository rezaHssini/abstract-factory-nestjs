import { SetMetadata } from '@nestjs/common';
import { GUI_FACTORY } from '../constants';
import { Os } from '../enum/os.enum';
import { IGuiFactory } from '../interfaces/gui-factory.interface';
import { TypedClassDecorator } from '../interfaces/TypedClassDecorator';

export function GUIFactoryDecorator(os: Os): TypedClassDecorator<IGuiFactory> {
  return SetMetadata<symbol, string>(GUI_FACTORY, os);
}
