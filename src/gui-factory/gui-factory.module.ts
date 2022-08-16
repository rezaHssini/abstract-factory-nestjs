import { Module } from '@nestjs/common';
import { ServiceExplorerModule } from 'src/service-explorer/service-explorer.module';
import { MacGuiFactory } from './factories[add-new-factories-here]/mac.factory';
import { WinGuiFactory } from './factories[add-new-factories-here]/win.factory';
import { GuiFactoryService } from './gui-factory.service';

@Module({
  imports: [ServiceExplorerModule],
  providers: [GuiFactoryService, MacGuiFactory, WinGuiFactory],
  exports: [GuiFactoryService],
})
export class GuiFactoryModule {}
