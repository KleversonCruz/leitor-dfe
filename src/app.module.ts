import { Module } from '@nestjs/common';
import { ReportController } from 'src/controllers/report.controller';
import { ParseJsCsvService } from 'src/services/parse-js-csv.service';
import { ParseXmlJsService } from 'src/services/parse-xml-js.service';
import { ConfigModule } from '@nestjs/config';
import { WebController } from './controllers/web.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ReportController, WebController],
  providers: [ParseXmlJsService, ParseJsCsvService],
})
export class AppModule {}
