import { jsonParser } from '../utils/json-parser';
import { Document } from './document';
import { Documents } from './documents';

export class Report {
  constructor(private documents: Documents) {}

  public details() {
    const rows = this.documents.rows();
    return jsonParser.toCsv(rows);
  }

  public items() {
    const rows = this.documents.list().map((document: Document) => {
      return document.rows();
    });

    return jsonParser.toCsv(rows.flat());
  }
}
