import { Test } from '@nestjs/testing';
import {
  cfeCsvResponse,
  cfeCsvResponseWithKeyFilter,
  cfeJs,
  nfceCsvResponseWithTotalizerRow,
  nfceJs,
} from 'src/mock/xml-files.mock';
import { ReportOptionsDto } from 'src/shared/dtos/report-options.dto';
import { ParseJsCsvService } from './parse-js-csv.service';

describe('ParseJsCsvService', () => {
  let parseJsCsvService: ParseJsCsvService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [ParseJsCsvService],
    }).compile();

    parseJsCsvService = moduleRef.get<ParseJsCsvService>(ParseJsCsvService);
  });

  it('should be defied', () => {
    expect(parseJsCsvService).toBeDefined();
  });

  describe('execute', () => {
    it('should return csv text with two keys', async () => {
      const options: ReportOptionsDto = {
        fieldDelimiter: ';',
        keys: 'emitCNPJ,emitNome',
        totalizerRow: 'false',
      };

      const result = await parseJsCsvService.execute(cfeJs, options);
      expect(result).toEqual(
        expect.stringContaining(cfeCsvResponseWithKeyFilter),
      );
    });

    it('should return csv text with all keys', async () => {
      const options: ReportOptionsDto = {
        totalizerRow: 'false',
      };

      const result = await parseJsCsvService.execute(cfeJs, options);
      expect(result).toEqual(expect.stringContaining(cfeCsvResponse));
    });

    it('should return csv text with totalizer line', async () => {
      const options: ReportOptionsDto = {
        fieldDelimiter: ';',
        totalizerRow: 'true',
      };

      const result = await parseJsCsvService.execute(nfceJs, options);
      expect(result).toEqual(
        expect.stringContaining(nfceCsvResponseWithTotalizerRow),
      );
    });
  });
});
