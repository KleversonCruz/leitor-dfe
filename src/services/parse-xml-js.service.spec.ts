import { Test } from '@nestjs/testing';
import {
  cfeFile,
  cfeJs,
  invalidFile,
  nfceFile,
  nfceJs,
  nfeFile,
  nfeJs,
} from 'src/mock/xml-files.mock';
import { ParseXmlJsService } from 'src/services/parse-xml-js.service';

describe('ParseXmlJsService', () => {
  let parseXmlJsService: ParseXmlJsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [ParseXmlJsService],
    }).compile();

    parseXmlJsService = moduleRef.get<ParseXmlJsService>(ParseXmlJsService);
  });

  it('should be defied', () => {
    expect(parseXmlJsService).toBeDefined();
  });

  describe('execute', () => {
    it('should return CFe json object', async () => {
      const result = parseXmlJsService.execute(cfeFile);

      expect(result).toEqual(cfeJs);
    });

    it('should return NFCe json object', async () => {
      const result = parseXmlJsService.execute(nfceFile);

      expect(result).toEqual(nfceJs);
    });

    it('should return NFe json object', async () => {
      const result = parseXmlJsService.execute(nfeFile);

      expect(result).toEqual(nfeJs);
    });

    it('should throw a bad request exception', () => {
      expect(() => {
        parseXmlJsService.execute(invalidFile);
      }).toThrowError();
    });

    it('should throw a bad request exception', () => {
      invalidFile[0].mimetype = 'application/json';

      expect(() => {
        parseXmlJsService.execute(invalidFile);
      }).toThrowError();
    });
  });
});
