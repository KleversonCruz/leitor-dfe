"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CFeMapping = void 0;
const formatter_1 = require("../utils/formatter");
class CFeMapping {
    constructor(model) {
        this.items = [];
        this.map(model);
    }
    map(model) {
        var _a, _b, _c;
        this.ide = {
            chave: model._attributes.id,
            serie: model.ide.nseriesat,
            status: ((_a = model._attributes) === null || _a === void 0 ? void 0 : _a.chcanc) ? 'CANCELADO' : 'AUTORIZADO',
            nNF: (_b = model.ide) === null || _b === void 0 ? void 0 : _b.ncfe,
            modelo: model.ide.mod,
            dtEmissao: formatter_1.Formatter.toLocaleDate(model.ide.demi),
            vDocumento: +model.total.vcfe,
        };
        this.emit = {
            emitCNPJ: formatter_1.Formatter.toCpfCnpjMask(model.emit.cnpj),
            emitNome: model.emit.xnome,
            emitMun: model.emit.enderemit.xmun,
            emitUF: model.ide.cuf,
        };
        this.dest = {
            destCPFCNPJ: formatter_1.Formatter.toCpfCnpjMask((_c = model.dest.cnpj) !== null && _c !== void 0 ? _c : model.dest.cpf),
            destNome: model.dest.xnome,
        };
        if (!model.det) {
            return [];
        }
        const det = Array.isArray(model.det) ? model.det : [model.det];
        det.forEach((modelItem) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
            const item = {
                itemEAN: modelItem.prod.cean,
                itemDescricao: modelItem.prod.xprod,
                itemNCM: modelItem.prod.ncm,
                itemCFOP: modelItem.prod.cfop,
                itemUnidade: modelItem.prod.ucom,
                itemQuantidade: +modelItem.prod.qcom,
                itemVUnit: +modelItem.prod.vuncom,
                itemVDesc: +modelItem.prod.vdesc,
                itemVTotal: +modelItem.prod.vitem,
                itemCSTPIS: (_m = (_j = (_f = (_c = (_b = (_a = modelItem.imposto.pis) === null || _a === void 0 ? void 0 : _a.pisaliq) === null || _b === void 0 ? void 0 : _b.cst) !== null && _c !== void 0 ? _c : (_e = (_d = modelItem.imposto.pis) === null || _d === void 0 ? void 0 : _d.pisqtde) === null || _e === void 0 ? void 0 : _e.cst) !== null && _f !== void 0 ? _f : (_h = (_g = modelItem.imposto.pis) === null || _g === void 0 ? void 0 : _g.pisnt) === null || _h === void 0 ? void 0 : _h.cst) !== null && _j !== void 0 ? _j : (_l = (_k = modelItem.imposto.pis) === null || _k === void 0 ? void 0 : _k.pissn) === null || _l === void 0 ? void 0 : _l.cst) !== null && _m !== void 0 ? _m : (_p = (_o = modelItem.imposto.pis) === null || _o === void 0 ? void 0 : _o.pisoutr) === null || _p === void 0 ? void 0 : _p.cst,
                itemCSTCOFINS: (_1 = (_y = (_v = (_s = (_r = (_q = modelItem.imposto.cofins) === null || _q === void 0 ? void 0 : _q.cofinsaliq) === null || _r === void 0 ? void 0 : _r.cst) !== null && _s !== void 0 ? _s : (_u = (_t = modelItem.imposto.cofins) === null || _t === void 0 ? void 0 : _t.cofinsqtde) === null || _u === void 0 ? void 0 : _u.cst) !== null && _v !== void 0 ? _v : (_x = (_w = modelItem.imposto.cofins) === null || _w === void 0 ? void 0 : _w.cofinsnt) === null || _x === void 0 ? void 0 : _x.cst) !== null && _y !== void 0 ? _y : (_0 = (_z = modelItem.imposto.cofins) === null || _z === void 0 ? void 0 : _z.cofinssn) === null || _0 === void 0 ? void 0 : _0.cst) !== null && _1 !== void 0 ? _1 : (_3 = (_2 = modelItem.imposto.cofins) === null || _2 === void 0 ? void 0 : _2.cofinsoutr) === null || _3 === void 0 ? void 0 : _3.cst,
                itemICMSCST: (_5 = (_4 = modelItem.imposto.icms.icms) === null || _4 === void 0 ? void 0 : _4.cst) !== null && _5 !== void 0 ? _5 : (_6 = modelItem.imposto.icms.icmssn) === null || _6 === void 0 ? void 0 : _6.csosn,
                itemICMSOrig: (_8 = (_7 = modelItem.imposto.icms.icms) === null || _7 === void 0 ? void 0 : _7.orig) !== null && _8 !== void 0 ? _8 : (_9 = modelItem.imposto.icms.icmssn) === null || _9 === void 0 ? void 0 : _9.orig,
            };
            this.items.push(item);
        });
        return this.items;
    }
}
exports.CFeMapping = CFeMapping;
//# sourceMappingURL=cfe-mapping.js.map