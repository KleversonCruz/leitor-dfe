import { Ide } from '../interfaces/ide';
import { Emit } from '../interfaces/emit';
import { Item } from '../interfaces/item';
import { DfeModel } from '../interfaces/dfe-model';
import { NfeSchema } from '../interfaces/schemas/nfe-schema';
import { Dest } from '../interfaces/dest';

export class NFeMapping implements DfeModel {
  public ide: Ide;
  public emit: Emit;
  public dest: Dest;
  public items: Item[] = [];

  constructor(model: NfeSchema) {
    this.map(model);
  }

  private map(model: NfeSchema) {
    this.ide = {
      chave: model._attributes.Id,
      serie: model.ide.serie?.text,
      status: 'AUTORIZADA',
      nNF: model.ide.cNF?.text,
      modelo: model.ide.mod?.text,
      dtEmissao: model.ide.dhEmi?.text,
      vDocumento: model.total.ICMSTot.vNF?.text,
    };
    this.emit = {
      emitCNPJ: model.emit.CNPJ?.text,
      emitNome: model.emit.xNome?.text,
      emitMun: model.emit.enderEmit.xMun?.text,
      emitUF: model.emit.enderEmit.UF?.text,
    };

    this.dest = {
      destCPFCNPJ: model.dest?.CNPJ?.text ?? model.dest?.CPF?.text,
      destNome: model.dest?.xNome?.text,
      destMun: model.dest?.enderDest.xMun?.text,
      destUF: model.dest?.enderDest.UF?.text,
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
