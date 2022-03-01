export interface CfeSchema {
  _attributes: {
    Id: string;
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
        obsFiscoDet: { text: string };
      };
      imposto: {
        vItem12741: [Object];
        ICMS: [Object];
        PIS: [Object];
        COFINS: [Object];
      };
    },
  ];
  total: { ICMSTot: [Object]; vCFe: [Object]; vCFeLei12741: [Object] };
  pgto: { MP: [Object]; vTroco: [Object] };
  infAdic: { infCpl: [Object]; obsFisco: [Object] };
}
