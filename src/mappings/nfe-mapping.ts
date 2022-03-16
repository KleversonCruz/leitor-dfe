import { Ide } from '../interfaces/ide';
import { Emit } from '../interfaces/emit';
import { Item } from '../interfaces/item';
import { DfeModel } from '../interfaces/dfe-model';
import { DetSchema, NfeSchema } from '../interfaces/schemas/nfe-schema';
import { Dest } from '../interfaces/dest';
import { Formatter } from '../utils/formatter';

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
      chave: model._attributes.id,
      serie: model.ide.serie,
      status: 'AUTORIZADO',
      nNF: model.ide.cnf,
      modelo: model.ide.mod,
      dtEmissao: Formatter.toLocaleDate(model.ide.dhemi),
      vDocumento: +model.total.icmstot.vnf,
    };
    this.emit = {
      emitCNPJ: Formatter.toCpfCnpjMask(model.emit.cnpj),
      emitNome: model.emit.xnome,
      emitMun: model.emit.enderemit.xmun,
      emitUF: model.emit.enderemit.uf,
    };

    this.dest = {
      destCPFCNPJ: Formatter.toCpfCnpjMask(model.dest?.cnpj ?? model.dest?.cpf),
      destNome: model.dest?.xnome,
      destMun: model.dest?.enderdest.xmun,
      destUF: model.dest?.enderdest.uf,
    };

    if (!model.det) {
      return [];
    }

    const det: any[] = Array.isArray(model.det) ? model.det : [model.det];

    det.forEach((modelItem: DetSchema) => {
      const item: Item = {
        itemEAN: modelItem.prod.cean,
        itemDescricao: modelItem.prod.xprod,
        itemNCM: modelItem.prod.ncm,
        itemCFOP: modelItem.prod.cfop,
        itemUnidade: modelItem.prod.ucom,
        itemQuantidade: +modelItem.prod.qcom,
        itemVUnit: +modelItem.prod.vuncom,
        itemVDesc: +modelItem.prod.vdesc,
        itemVTotal: +modelItem.prod.vprod,
        itemCSTPIS:
          modelItem.imposto.pis?.pisaliq?.cst ??
          modelItem.imposto.pis?.pisqtde?.cst ??
          modelItem.imposto.pis?.pisnt?.cst ??
          modelItem.imposto.pis?.pisoutr?.cst,
        itemCSTCOFINS:
          modelItem.imposto.cofins?.cofinsaliq?.cst ??
          modelItem.imposto.cofins?.cofinsqtde?.cst ??
          modelItem.imposto.cofins?.cofinsnt?.cst ??
          modelItem.imposto.cofins?.cofinsoutr?.cst,
        itemICMSCST:
          modelItem.imposto.icms.icms?.cst ??
          modelItem.imposto.icms.icmspart?.cst ??
          modelItem.imposto.icms.icmsst?.cst ??
          modelItem.imposto.icms.icmssn?.csosn,
        itemICMSOrig:
          modelItem.imposto.icms.icms?.orig ??
          modelItem.imposto.icms.icmspart?.orig ??
          modelItem.imposto.icms.icmsst?.orig ??
          modelItem.imposto.icms.icmssn?.orig,
      };
      this.items.push(item);
    });

    return this.items;
  }
}
