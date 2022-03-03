import { Dfe } from './dfe';

export class Dfes {
  private documents: Dfe[] = [];

  public add(document: any) {
    this.documents.push(document);
  }

  public list(): readonly Dfe[] {
    return this.documents;
  }
}
