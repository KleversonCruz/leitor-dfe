import { DfeModel } from '../interfaces/dfe-model';

export class Dfes {
  private documents: DfeModel[] = [];

  public add(document: any) {
    this.documents.push(document);
  }

  public list(): readonly DfeModel[] {
    return this.documents;
  }
}
