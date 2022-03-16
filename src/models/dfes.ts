import { DfeModel } from '../interfaces/dfe-model';
import { Item } from '../interfaces/item';

export class Dfes {
  private documents: DfeModel[] = [];

  public add(document: DfeModel) {
    this.documents.push(document);
  }

  private getTotalValue(itemProperty: keyof Item) {
    return this.itemList.reduce((partialSum, a) => {
      return partialSum + (a[itemProperty] as number);
    }, 0);
  }

  public addTotalizerRow() {
    const row: DfeModel = {
      emit: {},
      items: [
        {
          itemVTotal: this.getTotalValue('itemVTotal'),
          itemQuantidade: this.getTotalValue('itemQuantidade'),
          itemVDesc: this.getTotalValue('itemVDesc')
        },
      ],
      ide: {},
      dest: {},
    };
    this.add(row);
  }

  public get list(): DfeModel[] {
    return this.documents;
  }

  public get itemList(): Item[] {
    return this.documents.flatMap((x) => x.items);
  }
}
