import { Injectable } from '@nestjs/common';
import { Os } from './gui-factory/enum/os.enum';
import { GuiFactoryService } from './gui-factory/gui-factory.service';

@Injectable()
export class AppService {
  constructor(private readonly guiFactory: GuiFactoryService) {}
  async getElement(os: Os): Promise<void> {
    const button = await this.guiFactory.createButton(os);
    const checkbox = await this.guiFactory.createCheckBox(os);
    button.paint();
    checkbox.paint();
  }
}
