export class ReportMapping {
  private static keys: any = {
    status: { field: 'detail.status', title: 'status' },
    id: { field: 'detail.id', title: 'id' },
    cNF: { field: 'detail.cNF', title: 'cNF' },
    cUF: { field: 'detail.cUF', title: 'cUF' },
    dEmi: { field: 'detail.dEmi', title: 'dEmi' },
    mod: { field: 'detail.mod', title: 'mod' },
    vCFe: { field: 'detail.vCFe', title: 'vCFe' },
    CNPJ: { field: 'emitter.CNPJ', title: 'CNPJ' },
    xNome: { field: 'emitter.xNome', title: 'xNome' },

    nItem: { field: 'items.nItem', title: 'nItem' },
    cProd: { field: 'items.cProd', title: 'cProd' },
    xProd: { field: 'items.xProd', title: 'xProd' },
    uCom: { field: 'items.uCom', title: 'uCom' },
    qCom: { field: 'items.qCom', title: 'qCom' },
    vUnCom: { field: 'items.vUnCom', title: 'vUnCom' },
    vItem: { field: 'items.vItem', title: 'vItem' },
    NCM: { field: 'items.NCM', title: 'NCM' },
    CFOP: { field: 'items.CFOP', title: 'CFOP' },
  };

  public static getKey(key: string) {
    return this.keys[key];
  }

  public static getKeys() {
    const entries = Object.entries(this.keys);
    const keys = entries.map((element: any) => {
      return element[1];
    });
    return keys;
  }
}
