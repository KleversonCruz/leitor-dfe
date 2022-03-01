import { Situacoes } from '../enums/situacoes';
import { Detail } from '../interfaces/detail';
import { Emitter } from '../interfaces/emitter';
import { Item } from '../interfaces/item';
import { CfeCancSchema } from '../interfaces/schemas/cfe-canc-schema';
import { CfeSchema } from '../interfaces/schemas/cfe-schema';
import { Document } from '../models/document';
import { Formats } from './formats';

export class Mapping {
  public static cfe(model: CfeSchema): Document {
    const datail: Detail = {
      situacao: Situacoes.AUTORIZADO,
      id: model._attributes.Id,
      cDV: model.ide.cDV?.text,
      cNF: model.ide.cNF?.text,
      cUF: Formats.estado(model.ide.cUF?.text),
      dEmi: Formats.date(model.ide.dEmi?.text),
      hEmi: model.ide.hEmi?.text,
      mod: Formats.modelo(model.ide.mod?.text),
      nCFe: model.ide.nCFe?.text,
      nserieSAT: model.ide.nserieSAT?.text,
      tpAmb: model.ide.tpAmb?.text,
    };

    const emitter: Emitter = {
      CNPJ: model.emit.CNPJ?.text,
      IE: model.emit.IE?.text,
      cRegTrib: model.emit.cRegTrib?.text,
      xFant: model.emit.xFant?.text,
      xNome: model.emit.xNome?.text,

      enderEmit: {
        CEP: model.emit.enderEmit.CEP?.text,
        nro: model.emit.enderEmit.nro?.text,
        xBairro: model.emit.enderEmit.xBairro?.text,
        xCpl: model.emit.enderEmit.xCpl?.text,
        xLgr: model.emit.enderEmit.xLgr?.text,
        xMun: model.emit.enderEmit.xMun?.text,
      },
    };

    const items: Item[] = [];

    const det = Array.isArray(model.det) ? model.det : [model.det];

    det.forEach((modelItem) => {
      const item: Item = {
        nItem: modelItem._attributes?.nItem,
        cProd: modelItem.prod.cProd?.text,
        xProd: modelItem.prod.xProd?.text,
        NCM: modelItem.prod.NCM?.text,
        CFOP: modelItem.prod.CFOP?.text,
        uCom: modelItem.prod.uCom?.text,
        qCom: modelItem.prod.qCom?.text,
        vUnCom: modelItem.prod.vUnCom?.text,
        vProd: modelItem.prod.vProd?.text,
        indRegra: modelItem.prod.indRegra?.text,
        vItem: modelItem.prod.vItem?.text,
      };
      items.push(item);
    });

    return new Document(emitter, datail, items);
  }

  public static cfeCanc(model: CfeCancSchema): Document {
    const datail: Detail = {
      situacao: Situacoes.CANCELADO,
      id: model._attributes.Id,
      cDV: model.ide.cDV?.text,
      cNF: model.ide.cNF?.text,
      cUF: model.ide.cUF?.text,
      dEmi: Formats.date(model.ide.dEmi?.text),
      hEmi: model.ide.hEmi?.text,
      mod: Formats.modelo(model.ide.mod?.text),
      nCFe: model.ide.nCFe?.text,
      nserieSAT: model.ide.nserieSAT?.text,
    };

    const emitter: Emitter = {
      CNPJ: model.emit.CNPJ?.text,
      IE: model.emit.IE?.text,
      xFant: model.emit.xFant?.text,
      xNome: model.emit.xNome?.text,

      enderEmit: {
        CEP: model.emit.enderEmit.CEP?.text,
        nro: model.emit.enderEmit.nro?.text,
        xBairro: model.emit.enderEmit.xBairro?.text,
        xCpl: model.emit.enderEmit.xCpl?.text,
        xLgr: model.emit.enderEmit.xLgr?.text,
        xMun: model.emit.enderEmit.xMun?.text,
      },
    };

    return new Document(emitter, datail);
  }
}
