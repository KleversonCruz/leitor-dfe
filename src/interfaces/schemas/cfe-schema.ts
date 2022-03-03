export interface CfeSchema {
  _attributes: {
    Id: string;
    chCanc?: string;
  };
  ide: {
    cUF: { text: string };
    cNF: { text: string };
    mod: { text: string };
    nserieSAT: { text: string };
    nCFe: { text: string };
    dEmi: { text: string };
    hEmi: { text: string };
    cDV: { text: string };
    tpAmb: { text: string };
    CNPJ: { text: string };
    signAC: { text: string };
    numeroCaixa: { text: string };
  };
  emit: {
    CNPJ: { text: string };
    xNome: { text: string };
    xFant: { text: string };
    enderEmit: {
      xLgr: { text: string };
      nro: { text: string };
      xCpl: { text: string };
      xBairro: { text: string };
      xMun: { text: string };
      CEP: { text: string };
    };
    IE?: { text: string };
    cRegTrib: { text: string };
    indRatISSQN: { text: string };
  };
  det: [
    {
      _attributes: { nItem: string };
      prod: {
        cProd: { text: string };
        xProd: { text: string };
        NCM: { text: string };
        CFOP: { text: string };
        uCom: { text: string };
        qCom: { text: string };
        vUnCom: { text: string };
        vProd: { text: string };
        indRegra: { text: string };
        vItem: { text: string };
      };
      imposto: {
        ICMS: { text: string };
        PIS: { text: string };
        COFINS: { text: string };
      };
    },
  ];
  total: {
    ICMSTot: { text: string };
    vCFe: { text: string };
  };
  pgto: { MP: { text: string }; vTroco: { text: string } };
}
