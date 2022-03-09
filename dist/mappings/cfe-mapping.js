"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CFeMapping = void 0;
class CFeMapping {
    constructor(model) {
        this.items = [];
        this.map(model);
    }
    map(model) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        this.ide = {
            chave: model._attributes.Id,
            serie: (_a = model.ide.nserieSAT) === null || _a === void 0 ? void 0 : _a.text,
            status: ((_b = model._attributes) === null || _b === void 0 ? void 0 : _b.chCanc) ? 'CANCELADO' : 'AUTORIZADO',
            nNF: (_d = (_c = model.ide) === null || _c === void 0 ? void 0 : _c.cNF) === null || _d === void 0 ? void 0 : _d.text,
            modelo: (_e = model.ide.mod) === null || _e === void 0 ? void 0 : _e.text,
            dtEmissao: (_f = model.ide.dEmi) === null || _f === void 0 ? void 0 : _f.text,
            vDocumento: (_g = model.total.vCFe) === null || _g === void 0 ? void 0 : _g.text,
        };
        this.emit = {
            emitCNPJ: (_h = model.emit.CNPJ) === null || _h === void 0 ? void 0 : _h.text,
            emitNome: (_j = model.emit.xNome) === null || _j === void 0 ? void 0 : _j.text,
            emitMun: (_k = model.emit.enderEmit.xMun) === null || _k === void 0 ? void 0 : _k.text,
            emitUF: (_l = model.ide.cUF) === null || _l === void 0 ? void 0 : _l.text,
        };
        this.dest = {
            destCPFCNPJ: (_o = (_m = model.dest.CNPJ) === null || _m === void 0 ? void 0 : _m.text) !== null && _o !== void 0 ? _o : (_p = model.dest.CPF) === null || _p === void 0 ? void 0 : _p.text,
            destNome: (_q = model.dest.xNome) === null || _q === void 0 ? void 0 : _q.text,
        };
        if (!model.det) {
            return [];
        }
        const det = Array.isArray(model.det) ? model.det : [model.det];
        det.forEach((modelItem) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const item = {
                itemEAN: (_a = modelItem.prod.cEAN) === null || _a === void 0 ? void 0 : _a.text,
                itemDescricao: (_b = modelItem.prod.xProd) === null || _b === void 0 ? void 0 : _b.text,
                itemNCM: (_c = modelItem.prod.NCM) === null || _c === void 0 ? void 0 : _c.text,
                itemCFOP: (_d = modelItem.prod.CFOP) === null || _d === void 0 ? void 0 : _d.text,
                itemUnidade: (_e = modelItem.prod.uCom) === null || _e === void 0 ? void 0 : _e.text,
                itemQuantidade: (_f = modelItem.prod.qCom) === null || _f === void 0 ? void 0 : _f.text,
                itemVUnit: (_g = modelItem.prod.vUnCom) === null || _g === void 0 ? void 0 : _g.text,
                itemVTotal: (_h = modelItem.prod.vProd) === null || _h === void 0 ? void 0 : _h.text,
                imposto: {},
            };
            this.items.push(item);
        });
        return this.items;
    }
}
exports.CFeMapping = CFeMapping;
//# sourceMappingURL=cfe-mapping.js.map