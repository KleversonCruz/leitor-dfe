import { Situacoes } from '../enums/situacoes';

export interface Detail {
  situacao: Situacoes;
  id: string;
  cUF: string;
  cNF: string;
  mod: string;
  nserieSAT: string;
  nCFe: string;
  dEmi: string;
  hEmi: string;
  cDV: string;
  tpAmb?: string;
}
