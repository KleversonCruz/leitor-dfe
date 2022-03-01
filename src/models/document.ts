import { Detail } from '../interfaces/detail';
import { Emitter } from '../interfaces/emitter';
import { Item } from '../interfaces/item';
import { Row } from '../interfaces/report/row';
import { XmlFile } from '../interfaces/xml-file';
import { XmlParser } from '../utils/xml-parser';

export class Document {
  constructor(
    public readonly emitent: Emitter,
    public readonly items: Item[],
    public readonly datail: Detail,
  ) {}

  public static createFromFile(xmlFile: XmlFile): Document {
    return XmlParser.toJs(xmlFile);
  }

  public rows(): Row[] {
    const rows: Row[] = [];

    this.items.forEach((item) => {
      const row: Row = {
        CNPJ: this.emitent.CNPJ,
        xNome: this.emitent.xNome,
        cNF: this.datail.cNF,
        dEmi: this.datail.dEmi,
        nItem: item.nItem,
        cProd: item.cProd,
        xProd: item.xProd,
        NCM: item.NCM,
        CFOP: item.CFOP,
        uCom: item.uCom,
        qCom: item.qCom,
        vUnCom: item.vUnCom,
        vItem: item.vItem,
      };
      rows.push(row);
    });

    return rows;
  }
}
