import { Detail } from '../interfaces/detail';
import { Emitter } from '../interfaces/emitter';
import { Item } from '../interfaces/item';
import { DfeModel } from '../interfaces/dfe-model';

export class Dfe {
  public emitter: Emitter;
  public detail: Detail;
  public items: Item[] = [];

  constructor(model: DfeModel) {
    this.detail = model.detail;
    this.emitter = model.emitter;
    this.items = model.items;
  }
}
