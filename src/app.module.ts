import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuiFactoryModule } from './gui-factory/gui-factory.module';
import { ServiceExplorerModule } from './service-explorer/service-explorer.module';

@Module({
  imports: [ServiceExplorerModule, GuiFactoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
