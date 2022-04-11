import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ReportJsDto } from '../src/shared/dtos/report-js.dto';
import {
  cfeCsvResponse,
  cfeCsvResponseWithDelimiter,
  cfeCsvResponseWithKeyFilter,
  nfceCsvResponseWithTotalizerRow,
} from '../src/mock/xml-files.mock';

const cfeFilePath = `${__dirname}/testfiles/CFe.xml`;
const nfceFilePath = `${__dirname}/testfiles/NFce.xml`;
const invalidFilePath = `${__dirname}/testfiles/invalidFile.xml`;

const cfeJsResponse: ReportJsDto[] = [
  {
    ide: {
      chave: 'CFe35200000000000000000000000000000000000000000',
      serie: '000111111',
      status: 'AUTORIZADO',
      nNF: '001081',
      modelo: '59',
      dtEmissao: '10/10/2020',
      vDocumento: 990,
    },
    emit: {
      emitCNPJ: '11.111.111/1111-11',
      emitNome: 'EMITENTE TESTE',
      emitMun: 'PIRASSUNUNGA',
      emitUF: '35',
    },
    dest: {
      destCPFCNPJ: '111.111.111-11',
    },
    items: [
      {
        itemDescricao: 'Relogio',
        itemNCM: '91021110',
        itemCFOP: '5102',
        itemUnidade: 'UN',
        itemQuantidade: 1,
        itemVUnit: 990,
        itemVDesc: null,
        itemVTotal: 990,
        itemCSTPIS: '49',
        itemCSTCOFINS: '49',
        itemICMSCST: '102',
        itemICMSOrig: '0',
      },
    ],
  },
];

describe('ReportController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('(POST) /report/js', () => {
    it('expect status 201 and empty array response', () => {
      return request(app.getHttpServer()).post('/report/js').expect(201);
    });

    it('expect status 201 and object array response', () => {
      return request(app.getHttpServer())
        .post('/report/js')
        .attach('files', cfeFilePath)
        .expect(201)
        .expect(cfeJsResponse);
    });

    it('expect status 400', () => {
      return request(app.getHttpServer())
        .post('/report/js')
        .attach('files', invalidFilePath)
        .expect(400);
    });
  });

  describe('(POST) /report/csv', () => {
    it('expect status 201', () => {
      return request(app.getHttpServer()).post('/report/csv').expect(201);
    });

    it('expect status 201 and csv text response', async () => {
      const res = await request(app.getHttpServer())
        .post('/report/csv')
        .attach('files', cfeFilePath);

      expect(res.statusCode).toEqual(201);
      expect(res.text).toEqual(expect.stringContaining(cfeCsvResponse));
    });

    it('expect status 201 and csv text with delimiter ; response', async () => {
      const res = await request(app.getHttpServer())
        .post('/report/csv')
        .field('fieldDelimiter', ';')
        .attach('files', cfeFilePath);

      expect(res.statusCode).toEqual(201);
      expect(res.text).toEqual(
        expect.stringContaining(cfeCsvResponseWithDelimiter),
      );
    });

    it('expect status 201 and csv text with key filter response', async () => {
      const res = await request(app.getHttpServer())
        .post('/report/csv')
        .field('fieldDelimiter', ';')
        .field('keys', 'emitCNPJ,emitNome')
        .attach('files', cfeFilePath);

      expect(res.statusCode).toEqual(201);
      expect(res.text).toEqual(
        expect.stringContaining(cfeCsvResponseWithKeyFilter),
      );
    });

    it('expect status 201 and csv text with totalizer row response', async () => {
      const res = await request(app.getHttpServer())
        .post('/report/csv')
        .field('fieldDelimiter', ';')
        .field('totalizerRow', 'true')
        .attach('files', nfceFilePath);

      expect(res.statusCode).toEqual(201);
      expect(res.text).toEqual(
        expect.stringContaining(nfceCsvResponseWithTotalizerRow),
      );
    });
  });
});
