import { Injectable } from '@nestjs/common';
import { getInstanceMetadataValue } from '../service-explorer/helpers/metadata';
import { ServiceExplorerService } from '../service-explorer/service-explorer.service';
import { GUI_FACTORY } from './constants';
import { Os } from './enum/os.enum';
import { IButton } from './interfaces/button.interface';
import { IGuiFactory } from './interfaces/gui-factory.interface';

@Injectable()
export class GuiFactoryService {
  private factories: IGuiFactory[];
  constructor(private readonly serviceExplorer: ServiceExplorerService) {}
  async createButton(os: Os): Promise<IButton> {
    const factory = this.getFactory(os);
    return factory.createButton();
  }

  async createCheckBox(os: Os): Promise<IButton> {
    const factory = this.getFactory(os);
    return factory.createCheckBox();
  }

  protected getFactory(os: Os): IGuiFactory {
    if (!this.factories) {
      this.factories = this.serviceExplorer.filterWithMetadataKey(GUI_FACTORY);
    }

    const factories = this.factories.filter((factory) =>
      this.filterServicesByMetaData(os, factory),
    );
    if (!factories || !factories.length) {
      throw new Error(`Unknown os ${os}`);
    }

    return factories[0];
  }

  protected filterServicesByMetaData(os: string, instance: IGuiFactory): any {
    return getInstanceMetadataValue(instance, GUI_FACTORY).includes(os);
  }
}
