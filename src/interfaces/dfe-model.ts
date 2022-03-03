import { Detail } from './detail';
import { Emitter } from './emitter';
import { Item } from './item';

export interface DfeModel {
  emitter: Emitter;
  items: Item[];
  detail: Detail;
}
