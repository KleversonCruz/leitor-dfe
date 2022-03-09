import { Dest } from './dest';
import { Ide } from './ide';
import { Emit } from './emit';
import { Item } from './item';

export interface DfeModel {
  emit: Emit;
  items: Item[];
  ide: Ide;
  dest: Dest;
}
