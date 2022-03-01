import { BadRequest } from '../errors/bad-request';
import { Detail } from '../interfaces/detail';
import { Emitter } from '../interfaces/emitter';
import { Item } from '../interfaces/item';
import { CfeSchema } from '../interfaces/schemas/cfe-schema';
import { XmlFile } from '../interfaces/xml-file';
import { Document } from '../models/document';

const converter = require('xml-js');

const options = {
  compact: true,
  spaces: 4,
  textKey: 'text',
};

export class XmlParser {
  public static toJs(xmlFile: XmlFile): Document {
    const buffer = xmlFile.data.toString();

    const json = converter.xml2js(buffer, options);

    if (json.CFe) {
      return this.parseCfe(json);
    }

    throw new BadRequest(`O arquivo ${xmlFile.name} não é um XML válido`);
  }

  private static parseCfe(model: CfeSchema): Document {
    const datail: Detail = {
      cDV: model.CFe.infCFe.ide.cDV?.text,
      cNF: model.CFe.infCFe.ide.cNF?.text,
      cUF: model.CFe.infCFe.ide.cUF?.text,
      dEmi: model.CFe.infCFe.ide.dEmi?.text,
      hEmi: model.CFe.infCFe.ide.hEmi?.text,
      mod: model.CFe.infCFe.ide.mod?.text,
      nCFe: model.CFe.infCFe.ide.nCFe?.text,
      nserieSAT: model.CFe.infCFe.ide.nserieSAT?.text,
      tpAmb: model.CFe.infCFe.ide.tpAmb?.text,
    };

    const emitter: Emitter = {
      CNPJ: model.CFe.infCFe.emit.CNPJ?.text,
      IE: model.CFe.infCFe.emit.IE?.text,
      cRegTrib: model.CFe.infCFe.emit.cRegTrib?.text,
      xFant: model.CFe.infCFe.emit.xFant?.text,
      xNome: model.CFe.infCFe.emit.xNome?.text,

      enderEmit: {
        CEP: model.CFe.infCFe.emit.enderEmit.CEP?.text,
        nro: model.CFe.infCFe.emit.enderEmit.nro?.text,
        xBairro: model.CFe.infCFe.emit.enderEmit.xBairro?.text,
        xCpl: model.CFe.infCFe.emit.enderEmit.xCpl?.text,
        xLgr: model.CFe.infCFe.emit.enderEmit.xLgr?.text,
        xMun: model.CFe.infCFe.emit.enderEmit.xMun?.text,
      },
    };

    const items: Item[] = [];

    const det = Array.isArray(model.CFe.infCFe.det)
      ? model.CFe.infCFe.det
      : [model.CFe.infCFe.det];

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

    return new Document(emitter, items, datail);
  }
}
