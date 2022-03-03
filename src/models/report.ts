import { ReportKeys } from '../enums/report-keys';
import { ReportOptions } from '../interfaces/report-options';
import { jsonParser } from '../utils/json-parser';
import { Dfes } from './dfes';

export class Report {
  constructor(private documents: Dfes) {}

  private options: ReportOptions = {
    delimiter: {
      wrap: '"',
      field: ',',
      eol: '\n',
    },
    trimHeaderFields: true,
    emptyFieldValue: '',
  };

  public details() {
    this.options.keys = [
      ReportKeys.mod,
      ReportKeys.status,
      ReportKeys.id,
      ReportKeys.cNF,
      ReportKeys.dEmi,
      ReportKeys.CNPJ,
      ReportKeys.xNome,
      ReportKeys.cUF,
      ReportKeys.vCFe
    ];
    const rows = this.documents.list().flat();
    return jsonParser.toCsv(rows, this.options);
  }

  public items() {
    this.options = {
      keys: [
        ReportKeys.mod,
        ReportKeys.status,
        ReportKeys.id,
        ReportKeys.cNF,
        ReportKeys.dEmi,
        ReportKeys.CNPJ,
        ReportKeys.xNome,
        ReportKeys.cUF,

        ReportKeys.nItem,
        ReportKeys.cProd,
        ReportKeys.xProd,
        ReportKeys.uCom,
        ReportKeys.qCom,
        ReportKeys.vUnCom,
        ReportKeys.vItem,
        ReportKeys.NCM,
        ReportKeys.CFOP,
      ],
      unwindArrays: true,
    };

    const rows = this.documents.list();

    return jsonParser.toCsv(rows.flat(), this.options);
  }
}
