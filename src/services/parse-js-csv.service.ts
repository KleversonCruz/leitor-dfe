import { Injectable } from '@nestjs/common';
import { Service } from 'src/core/base/service';
import { json2csvAsync } from 'json-2-csv';
import { ReportJsDto } from 'src/shared/dtos/report-js.dto';
import { ReportOptionsInterface } from 'src/shared/interfaces/report-options.interface';
import { Format } from 'src/shared/utils/format';
import { ReportOptionsDto } from 'src/shared/dtos/report-options.dto';
import { ReportKeysMapper } from 'src/core/domain/mappers/report-keys.mapper';

function getTotalValue(reportJsDtos: ReportJsDto[]) {
  const itens = reportJsDtos.flatMap((x) => x.items);

  const reducedArray = itens.reduce((accumulator, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === 'number')
        accumulator[key] = (accumulator[key] || 0) + item[key];
    });
    return accumulator;
  }, {});
  reportJsDtos.push({
    items: [reducedArray],
  });
}

@Injectable()
export class ParseJsCsvService implements Service<string> {
  private reportKeysMapper: ReportKeysMapper;

  constructor() {
    this.reportKeysMapper = new ReportKeysMapper();
  }

  private options: ReportOptionsInterface = {
    delimiter: {
      wrap: '"',
      field: ',',
      eol: '\n',
    },
    trimHeaderFields: true,
    emptyFieldValue: '',
    excelBOM: true,
    unwindArrays: true,
    expandArrayObjects: true,
    preventCsvInjection: true,
    parseValue: (value: number) => Format.toBrlCurrency(value),
  };

  execute(
    reportJsDtos: ReportJsDto[],
    reportOptions: ReportOptionsDto,
  ): Promise<string> {
    this.options.delimiter = {
      field: reportOptions?.fieldDelimiter,
    };
    this.options.keys = this.reportKeysMapper.mapTo(reportOptions.keys);

    if (reportOptions.totalizerRow == 'true') {
      getTotalValue(reportJsDtos);
    }

    return json2csvAsync(reportJsDtos, this.options);
  }
}
