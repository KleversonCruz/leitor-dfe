import { Row } from '../interfaces/report/row';
import { jsonParser } from '../utils/json-parser';
import { Document } from './document';

export class Documents {
  private documents: Document[] = [];

  public add(document: Document) {
    this.documents.push(document);
  }

  public list(): readonly Document[] {
    return this.documents;
  }

  public report() {
    const rows: Row[] = [];
    this.documents.forEach((document) => {
      rows.push(...document.rows());
    });
    return jsonParser.toCsv(rows);
  }
}
