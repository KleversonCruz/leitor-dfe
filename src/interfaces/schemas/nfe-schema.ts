export interface NfeSchema {
  _attributes: {
    Id: string;
  };
  ide: {
    cUF: { text: string };
    cNF: { text: string };
    natOp: { text: string };
    mod: { text: string };
    serie: { text: string };
    nNF: { text: string };
    dhEmi: { text: string };
    dhSaiEnt: { text: string };
    tpNF: { text: string };
    idDest: { text: string };
    cMunFG: { text: string };
    tpImp: { text: string };
    tpEmis: { text: string };
    cDV: { text: string };
    tpAmb: { text: string };
    finNFe: { text: string };
    indFinal: { text: string };
    indPres: { text: string };
    procEmi: { text: string };
    verProc: { text: string };
  };
  emit: {
    CNPJ: { text: string };
    xNome: { text: string };
    xFant: { text: string };
    enderEmit: {
      xLgr: { text: string };
      xCpl: { text: string };
      nro: { text: string };
      xBairro: { text: string };
      cMun: { text: string };
      xMun: { text: string };
      UF: { text: string };
      CEP: { text: string };
      cPais: { text: string };
      xPais: { text: string };
      fone: { text: string };
    };
    IE: { text: string };
    CRT: { text: string };
  };
  dest: {
    CPF: { text: string };
    CNPJ: { text: string };
    xNome: { text: string };
    enderDest: {
      xLgr: { text: string };
      nro: { text: string };
      xBairro: { text: string };
      cMun: { text: string };
      xMun: { text: string };
      xCpl: { text: string };
      UF: { text: string };
      CEP: { text: string };
      cPais: { text: string };
      xPais: { text: string };
      fone: { text: string };
    };
    indIEDest: { text: string };
    email: { text: string };
  };
  det: [
    {
      _attributes: { nItem: string };
      prod: {
        cProd: { text: string };
        cEAN: { text: string };
        xProd: { text: string };
        NCM: { text: string };
        CFOP: { text: string };
        uCom: { text: string };
        qCom: { text: string };
        vUnCom: { text: string };
        vProd: { text: string };
        cEANTrib: { text: string };
        uTrib: { text: string };
        qTrib: { text: string };
        vUnTrib: { text: string };
        indTot: { text: string };
      };
      imposto: {
        vTotTrib: { text: string };
        ICMS: { text: string };
        PIS: { text: string };
        COFINS: { text: string };
      };
    },
  ];
  total: {
    ICMSTot: {
      vBC: { text: string };
      vICMS: { text: string };
      vICMSDeson: { text: string };
      vFCPUFDest: { text: string };
      vICMSUFDest: { text: string };
      vICMSUFRemet: { text: string };
      vFCP: { text: string };
      vBCST: { text: string };
      vST: { text: string };
      vFCPST: { text: string };
      vFCPSTRet: { text: string };
      vProd: { text: string };
      vFrete: { text: string };
      vSeg: { text: string };
      vDesc: { text: string };
      vII: { text: string };
      vIPI: { text: string };
      vIPIDevol: { text: string };
      vPIS: { text: string };
      vCOFINS: { text: string };
      vOutro: { text: string };
      vNF: { text: string };
      vTotTrib: { text: string };
    };
  };
  transp: {
    modFrete: { text: string };
    vol: {
      qVol: { text: string };
    };
  };
  pag: {
    detPag: {
      tPag: { text: string };
      vPag: { text: string };
    };
  };
  infAdic: { infAdFisco: { text: string } };
}
