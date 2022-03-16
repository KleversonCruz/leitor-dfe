export class ReportMapping {
  private static keys: any = {
    emitCNPJ: { field: 'emit.emitCNPJ', title: 'emitCNPJ' },
    emitNome: { field: 'emit.emitNome', title: 'emitNome' },
    emitMun: { field: 'emit.emitMun', title: 'emitMun' },

    status: { field: 'ide.status', title: 'status' },
    mod: { field: 'ide.modelo', title: 'mod' },
    nNF: { field: 'ide.nNF', title: 'nNF' },
    serie: { field: 'ide.serie', title: 'serie' },
    chave: { field: 'ide.chave', title: 'chave' },
    dtEmissao: { field: 'ide.dtEmissao', title: 'dtEmissao' },
    vDocumento: { field: 'ide.vDocumento', title: 'vDocumento' },

    destCPFCNPJ: { field: 'dest.destCPFCNPJ', title: 'destCPFCNPJ' },
    destNome: { field: 'dest.destNome', title: 'destNome' },

    itemEAN: { field: 'items.itemEAN', title: 'itemEAN' },
    itemDescricao: { field: 'items.itemDescricao', title: 'itemDescricao' },
    itemUnidade: { field: 'items.itemUnidade', title: 'itemUnidade' },
    itemQuantidade: { field: 'items.itemQuantidade', title: 'itemQuantidade' },
    itemVUnit: { field: 'items.itemVUnit', title: 'itemVUnit' },
    itemVDesc: { field: 'items.itemVDesc', title: 'itemVDesc' },
    itemVTotal: { field: 'items.itemVTotal', title: 'itemVTotal' },
    itemNCM: { field: 'items.itemNCM', title: 'itemNCM' },
    itemCFOP: { field: 'items.itemCFOP', title: 'itemCFOP' },
    itemCSTPIS: { field: 'items.itemCSTPIS', title: 'itemCSTPIS' },
    itemCSTCOFINS: { field: 'items.itemCSTCOFINS', title: 'itemCSTCOFINS' },
    itemICMSCST: { field: 'items.itemICMSCST', title: 'itemICMSCST' },
    itemICMSOrig: { field: 'items.itemICMSOrig', title: 'itemICMSOrig' },
  };

  public static getKey(key: string) {
    return this.keys[key] || '';
  }

  public static getKeys() {
    const entries = Object.entries(this.keys);
    const keys = entries.map((element: any) => {
      return element[1];
    });
    return keys;
  }
}
