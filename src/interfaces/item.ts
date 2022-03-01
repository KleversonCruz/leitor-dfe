export interface Item {
  nItem: string;
  cProd: string;
  xProd: string;
  NCM: string;
  CFOP: string;
  uCom: string;
  qCom: string;
  vUnCom: string;
  vProd: string;
  indRegra: string;
  vItem: string;

  imposto?: {
    vItem12741: string;
    ICMS: string;
    PIS: string;
    COFINS: string;
  };
}
