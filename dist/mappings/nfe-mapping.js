"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFeMapping = void 0;
const formatter_1 = require("../utils/formatter");
class NFeMapping {
    constructor(model) {
        this.items = [];
        this.map(model);
    }
    map(model) {
        var _a, _b, _c, _d, _e, _f;
        this.ide = {
            chave: model._attributes.id,
            serie: model.ide.serie,
            status: 'AUTORIZADO',
            nNF: model.ide.cnf,
            modelo: model.ide.mod,
            dtEmissao: formatter_1.Formatter.toLocaleDate(model.ide.dhemi),
            vDocumento: +model.total.icmstot.vnf,
        };
        this.emit = {
            emitCNPJ: formatter_1.Formatter.toCpfCnpjMask(model.emit.cnpj),
            emitNome: model.emit.xnome,
            emitMun: model.emit.enderemit.xmun,
            emitUF: model.emit.enderemit.uf,
        };
        this.dest = {
            destCPFCNPJ: formatter_1.Formatter.toCpfCnpjMask((_b = (_a = model.dest) === null || _a === void 0 ? void 0 : _a.cnpj) !== null && _b !== void 0 ? _b : (_c = model.dest) === null || _c === void 0 ? void 0 : _c.cpf),
            destNome: (_d = model.dest) === null || _d === void 0 ? void 0 : _d.xnome,
            destMun: (_e = model.dest) === null || _e === void 0 ? void 0 : _e.enderdest.xmun,
            destUF: (_f = model.dest) === null || _f === void 0 ? void 0 : _f.enderdest.uf,
        };
        if (!model.det) {
            return [];
        }
        const det = Array.isArray(model.det) ? model.det : [model.det];
        det.forEach((modelItem) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
            const item = {
                itemEAN: modelItem.prod.cean,
                itemDescricao: modelItem.prod.xprod,
                itemNCM: modelItem.prod.ncm,
                itemCFOP: modelItem.prod.cfop,
                itemUnidade: modelItem.prod.ucom,
                itemQuantidade: +modelItem.prod.qcom,
                itemVUnit: +modelItem.prod.vuncom,
                itemVDesc: +modelItem.prod.vdesc,
                itemVTotal: +modelItem.prod.vprod,
                itemCSTPIS: (_j = (_f = (_c = (_b = (_a = modelItem.imposto.pis) === null || _a === void 0 ? void 0 : _a.pisaliq) === null || _b === void 0 ? void 0 : _b.cst) !== null && _c !== void 0 ? _c : (_e = (_d = modelItem.imposto.pis) === null || _d === void 0 ? void 0 : _d.pisqtde) === null || _e === void 0 ? void 0 : _e.cst) !== null && _f !== void 0 ? _f : (_h = (_g = modelItem.imposto.pis) === null || _g === void 0 ? void 0 : _g.pisnt) === null || _h === void 0 ? void 0 : _h.cst) !== null && _j !== void 0 ? _j : (_l = (_k = modelItem.imposto.pis) === null || _k === void 0 ? void 0 : _k.pisoutr) === null || _l === void 0 ? void 0 : _l.cst,
                itemCSTCOFINS: (_v = (_s = (_p = (_o = (_m = modelItem.imposto.cofins) === null || _m === void 0 ? void 0 : _m.cofinsaliq) === null || _o === void 0 ? void 0 : _o.cst) !== null && _p !== void 0 ? _p : (_r = (_q = modelItem.imposto.cofins) === null || _q === void 0 ? void 0 : _q.cofinsqtde) === null || _r === void 0 ? void 0 : _r.cst) !== null && _s !== void 0 ? _s : (_u = (_t = modelItem.imposto.cofins) === null || _t === void 0 ? void 0 : _t.cofinsnt) === null || _u === void 0 ? void 0 : _u.cst) !== null && _v !== void 0 ? _v : (_x = (_w = modelItem.imposto.cofins) === null || _w === void 0 ? void 0 : _w.cofinsoutr) === null || _x === void 0 ? void 0 : _x.cst,
                itemICMSCST: (_3 = (_1 = (_z = (_y = modelItem.imposto.icms.icms) === null || _y === void 0 ? void 0 : _y.cst) !== null && _z !== void 0 ? _z : (_0 = modelItem.imposto.icms.icmspart) === null || _0 === void 0 ? void 0 : _0.cst) !== null && _1 !== void 0 ? _1 : (_2 = modelItem.imposto.icms.icmsst) === null || _2 === void 0 ? void 0 : _2.cst) !== null && _3 !== void 0 ? _3 : (_4 = modelItem.imposto.icms.icmssn) === null || _4 === void 0 ? void 0 : _4.csosn,
                itemICMSOrig: (_10 = (_8 = (_6 = (_5 = modelItem.imposto.icms.icms) === null || _5 === void 0 ? void 0 : _5.orig) !== null && _6 !== void 0 ? _6 : (_7 = modelItem.imposto.icms.icmspart) === null || _7 === void 0 ? void 0 : _7.orig) !== null && _8 !== void 0 ? _8 : (_9 = modelItem.imposto.icms.icmsst) === null || _9 === void 0 ? void 0 : _9.orig) !== null && _10 !== void 0 ? _10 : (_11 = modelItem.imposto.icms.icmssn) === null || _11 === void 0 ? void 0 : _11.orig,
            };
            this.items.push(item);
        });
        return this.items;
    }
}
exports.NFeMapping = NFeMapping;
//# sourceMappingURL=nfe-mapping.js.map