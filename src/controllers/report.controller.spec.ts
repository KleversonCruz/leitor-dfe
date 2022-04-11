import { Test } from '@nestjs/testing';
import { ParseJsCsvService } from 'src/services/parse-js-csv.service';
import { ParseXmlJsService } from 'src/services/parse-xml-js.service';
import { ReportController } from 'src/controllers/report.controller';
import { ReportOptionsDto } from 'src/shared/dtos/report-options.dto';
import { cfeFile, cfeJs } from 'src/mock/xml-files.mock';

const csvText = `emitCNPJ
11.111.111/1111-11`;

describe('ReportController', () => {
  let reportController: ReportController;
  let parseXmlJsService: ParseXmlJsService;
  let parseJsCsvService: ParseJsCsvService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ReportController],
      providers: [
        {
          provide: ParseJsCsvService,
          useValue: {
            execute: jest.fn().mockResolvedValue(csvText),
          },
        },
        {
          provide: ParseXmlJsService,
          useValue: {
            execute: jest.fn().mockReturnValue(cfeJs),
          },
        },
      ],
    }).compile();

    reportController = moduleRef.get<ReportController>(ReportController);
    parseXmlJsService = moduleRef.get<ParseXmlJsService>(ParseXmlJsService);
    parseJsCsvService = moduleRef.get<ParseJsCsvService>(ParseJsCsvService);
  });

  it('should be defied', () => {
    expect(reportController).toBeDefined();
    expect(parseXmlJsService).toBeDefined();
    expect(parseJsCsvService).toBeDefined();
  });

  describe('createJs', () => {
    it('should return json object', async () => {
      const result = reportController.createJs(cfeFile);

      expect(result).toEqual(cfeJs);
      expect(parseXmlJsService.execute).toHaveBeenCalledTimes(1);
      expect(parseXmlJsService.execute).toHaveBeenCalledWith(cfeFile);
    });
  });

  describe('createCsv', () => {
    it('should return a csv string', async () => {
      const options: ReportOptionsDto = {
        fieldDelimiter: ';',
        keys: 'emitCNPJ',
        totalizerRow: 'true',
      };

      const result = await reportController.createCsv(cfeFile, options);
      expect(parseXmlJsService.execute).toHaveBeenCalledTimes(1);
      expect(parseXmlJsService.execute).toHaveBeenCalledWith(cfeFile);

      expect(parseJsCsvService.execute).toHaveBeenCalledTimes(1);
      expect(parseJsCsvService.execute).toHaveBeenCalledWith(cfeJs, options);
      expect(result).toEqual(csvText);
    });
  });
});
