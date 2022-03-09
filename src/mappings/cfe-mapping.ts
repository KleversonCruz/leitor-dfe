import { Ide } from '../interfaces/ide';
import { Emit } from '../interfaces/emit';
import { Item } from '../interfaces/item';
import { DfeModel } from '../interfaces/dfe-model';
import { CfeSchema } from '../interfaces/schemas/cfe-schema';
import { Dest } from '../interfaces/dest';

export class CFeMapping implements DfeModel {
  public ide: Ide;
  public emit: Emit;
  public dest: Dest;
  public items: Item[] = [];

  constructor(model: CfeSchema) {
    this.map(model);
  }

  private map(model: CfeSchema) {
    this.ide = {
      chave: model._attributes.Id,
      serie: model.ide.nserieSAT?.text,
      status: model._attributes?.chCanc ? 'CANCELADO' : 'AUTORIZADO',
      nNF: model.ide?.cNF?.text,
      modelo: model.ide.mod?.text,
      dtEmissao: model.ide.dEmi?.text,
      vDocumento: model.total.vCFe?.text,
    };

    this.emit = {
      emitCNPJ: model.emit.CNPJ?.text,
      emitNome: model.emit.xNome?.text,
      emitMun: model.emit.enderEmit.xMun?.text,
      emitUF: model.ide.cUF?.text,
    };

    this.dest = {
      destCPFCNPJ: model.dest.CNPJ?.text ?? model.dest.CPF?.text,
      destNome: model.dest.xNome?.text,
    };

    if (!model.det) {
      return [];
    }

    const det: any[] = Array.isArray(model.det) ? model.det : [model.det];

    det.forEach((modelItem) => {
      const item: Item = {
        itemEAN: modelItem.prod.cEAN?.text,
        itemDescricao: modelItem.prod.xProd?.text,
        itemNCM: modelItem.prod.NCM?.text,
        itemCFOP: modelItem.prod.CFOP?.text,
        itemUnidade: modelItem.prod.uCom?.text,
        itemQuantidade: modelItem.prod.qCom?.text,
        itemVUnit: modelItem.prod.vUnCom?.text,
        itemVTotal: modelItem.prod.vProd?.text,
        imposto: {},
      };
      this.items.push(item);
    });

    return this.items;
  }
}
