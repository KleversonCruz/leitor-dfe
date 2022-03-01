import { CfeSchema } from './cfe-schema';

export interface CfeCancSchema extends CfeSchema {
  _attributes: {
    Id: string;
    chCanc: string;
  };
  dEmi: { text: string };
  hEmi: { text: string };
}
