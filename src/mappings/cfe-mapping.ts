import { Detail } from '../interfaces/detail';
import { Emitter } from '../interfaces/emitter';
import { Item } from '../interfaces/item';
import { DfeModel } from '../interfaces/dfe-model';
import { CfeSchema } from '../interfaces/schemas/cfe-schema';
import { Format } from '../utils/format';
import { DfeStatus } from '../enums/dfe-status';

export class CFeMapping implements DfeModel {
  constructor(private model: CfeSchema) {}

  private _detail: Detail;

  public get detail(): Detail {
    this._detail = {
      status: DfeStatus.AUTORIZADO,
      id: this.model._attributes.Id,
      cDV: this.model.ide.cDV?.text,
      cNF: this.model.ide.cNF?.text,
      cUF: Format.brasilUf(this.model.ide.cUF?.text),
      dEmi: Format.date(this.model.ide.dEmi?.text),
      hEmi: this.model.ide.hEmi?.text,
      mod: Format.dfeModel(this.model.ide.mod?.text),
      nCFe: this.model.ide.nCFe?.text,
      nserieSAT: this.model.ide.nserieSAT?.text,
      vCFe: this.model.total.vCFe.text,
    };

    if (this.model._attributes.chCanc) {
      this._detail.status = DfeStatus.CANCELADO;
    }
    return this._detail;
  }

  private _emitter: Emitter;

  public get emitter(): Emitter {
    this._emitter = {
      CNPJ: this.model.emit.CNPJ?.text,
      IE: this.model.emit.IE?.text,
      xFant: this.model.emit.xFant?.text,
      xNome: this.model.emit.xNome?.text,

      enderEmit: {
        CEP: this.model.emit.enderEmit.CEP?.text,
        nro: this.model.emit.enderEmit.nro?.text,
        xBairro: this.model.emit.enderEmit.xBairro?.text,
        xCpl: this.model.emit.enderEmit.xCpl?.text,
        xLgr: this.model.emit.enderEmit.xLgr?.text,
        xMun: this.model.emit.enderEmit.xMun?.text,
      },
    };

    return this._emitter;
  }

  private _items: Item[] = [];

  public get items(): Item[] {
    if (!this.model.det) {
      return [];
    }

    const det = Array.isArray(this.model.det)
      ? this.model.det
      : [this.model.det];

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
      this._items.push(item);
    });

    return this._items;
  }
}
