"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportMapping = void 0;
class ReportMapping {
    static getKey(key) {
        return this.keys[key] || '';
    }
    static getKeys() {
        const entries = Object.entries(this.keys);
        const keys = entries.map((element) => {
            return element[1];
        });
        return keys;
    }
}
exports.ReportMapping = ReportMapping;
ReportMapping.keys = {
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
    destCPFCNPJ: { field: 'dest.destNome', title: 'destNome' },
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
};
//# sourceMappingURL=report-mapping.js.map