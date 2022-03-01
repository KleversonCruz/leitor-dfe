import { Detail } from '../interfaces/detail';
import { Emitter } from '../interfaces/emitter';
import { Item } from '../interfaces/item';
import { ItemRow } from '../interfaces/report/item-row';
import { AttachmentFile } from '../interfaces/attachment-file';
import { XmlParser } from '../utils/xml-parser';

export class Document {
  constructor(
    public emitent: Emitter,
    public datail: Detail,
    public items: Item[] = [],
  ) {}

  public static createFromFile(xmlFile: AttachmentFile): Document {
    return XmlParser.toJs(xmlFile);
  }

  public rows(): ItemRow[] {
    const rows: ItemRow[] = [];

    this.items.forEach((item) => {
      const row: ItemRow = {
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
