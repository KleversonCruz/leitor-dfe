"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFeMapping = void 0;
class NFeMapping {
    constructor(model) {
        this.items = [];
        this.map(model);
    }
    map(model) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        this.ide = {
            chave: model._attributes.Id,
            serie: (_a = model.ide.serie) === null || _a === void 0 ? void 0 : _a.text,
            status: 'AUTORIZADA',
            nNF: (_b = model.ide.cNF) === null || _b === void 0 ? void 0 : _b.text,
            modelo: (_c = model.ide.mod) === null || _c === void 0 ? void 0 : _c.text,
            dtEmissao: (_d = model.ide.dhEmi) === null || _d === void 0 ? void 0 : _d.text,
            vDocumento: (_e = model.total.ICMSTot.vNF) === null || _e === void 0 ? void 0 : _e.text,
        };
        this.emit = {
            emitCNPJ: (_f = model.emit.CNPJ) === null || _f === void 0 ? void 0 : _f.text,
            emitNome: (_g = model.emit.xNome) === null || _g === void 0 ? void 0 : _g.text,
            emitMun: (_h = model.emit.enderEmit.xMun) === null || _h === void 0 ? void 0 : _h.text,
            emitUF: (_j = model.emit.enderEmit.UF) === null || _j === void 0 ? void 0 : _j.text,
        };
        this.dest = {
            destCPFCNPJ: (_m = (_l = (_k = model.dest) === null || _k === void 0 ? void 0 : _k.CNPJ) === null || _l === void 0 ? void 0 : _l.text) !== null && _m !== void 0 ? _m : (_p = (_o = model.dest) === null || _o === void 0 ? void 0 : _o.CPF) === null || _p === void 0 ? void 0 : _p.text,
            destNome: (_r = (_q = model.dest) === null || _q === void 0 ? void 0 : _q.xNome) === null || _r === void 0 ? void 0 : _r.text,
            destMun: (_t = (_s = model.dest) === null || _s === void 0 ? void 0 : _s.enderDest.xMun) === null || _t === void 0 ? void 0 : _t.text,
            destUF: (_v = (_u = model.dest) === null || _u === void 0 ? void 0 : _u.enderDest.UF) === null || _v === void 0 ? void 0 : _v.text,
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
exports.NFeMapping = NFeMapping;
//# sourceMappingURL=nfe-mapping.js.map