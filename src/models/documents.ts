import { DetailRow } from '../interfaces/report/detail-row';
import { Document } from './document';
import { Report } from './report';

export class Documents {
  private documents: Document[] = [];
  public readonly report = new Report(this);

  public add(document: Document) {
    this.documents.push(document);
  }

  public list(): readonly Document[] {
    return this.documents;
  }

  public rows(): DetailRow[] {
    const rows: DetailRow[] = [];

    this.documents.forEach((document) => {
      const row: DetailRow = {
        chave: document.datail.id,
        CNPJ: document.emitent.CNPJ,
        xNome: document.emitent.xNome,
        cNF: document.datail.cNF,
        dEmi: document.datail.dEmi,
        mod: document.datail.mod,
        hEmi: document.datail.hEmi,
        cUF: document.datail.cUF
      };
      rows.push(row);
    });

    return rows;
  }
}
