import { Module } from '@nestjs/common';
import { ReportController } from 'src/controllers/report.controller';
import { ParseJsCsvService } from 'src/services/parse-js-csv.service';
import { ParseXmlJsService } from 'src/services/parse-xml-js.service';

@Module({
  imports: [],
  controllers: [ReportController],
  providers: [ParseXmlJsService, ParseJsCsvService],
})
export class AppModule {}
