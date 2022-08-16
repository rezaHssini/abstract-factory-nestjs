import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Os } from './gui-factory/enum/os.enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async get(): Promise<void> {
    let os = Os.MAC;
    await this.appService.getElement(os);
    os = Os.WIN;
    await this.appService.getElement(os);
  }
}
