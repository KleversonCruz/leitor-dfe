import { Ide } from '../interfaces/ide';
import { Emit } from '../interfaces/emit';
import { Item } from '../interfaces/item';
import { DfeModel } from '../interfaces/dfe-model';
import { CfeSchema, DetSchema } from '../interfaces/schemas/cfe-schema';
import { Dest } from '../interfaces/dest';
import { Formatter } from '../utils/formatter';

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
      chave: model._attributes.id,
      serie: model.ide.nseriesat,
      status: model._attributes?.chcanc ? 'CANCELADO' : 'AUTORIZADO',
      nNF: model.ide?.ncfe,
      modelo: model.ide.mod,
      dtEmissao: Formatter.toLocaleDate(model.ide.demi),
      vDocumento: Formatter.toBrlCurrency(+model.total.vcfe),
    };

    this.emit = {
      emitCNPJ: Formatter.toCpfCnpjMask(model.emit.cnpj),
      emitNome: model.emit.xnome,
      emitMun: model.emit.enderemit.xmun,
      emitUF: model.ide.cuf,
    };

    this.dest = {
      destCPFCNPJ: Formatter.toCpfCnpjMask(model.dest.cnpj ?? model.dest.cpf),
      destNome: model.dest.xnome,
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
        itemQuantidade: Formatter.toBrlCurrency(+modelItem.prod.qcom),
        itemVUnit: Formatter.toBrlCurrency(+modelItem.prod.vuncom),
        itemVDesc: Formatter.toBrlCurrency(+modelItem.prod.vdesc),
        itemVTotal: Formatter.toBrlCurrency(+modelItem.prod.vitem),
        itemCSTPIS:
          modelItem.imposto.pis?.pisaliq?.cst ??
          modelItem.imposto.pis?.pisqtde?.cst ??
          modelItem.imposto.pis?.pisnt?.cst ??
          modelItem.imposto.pis?.pissn?.cst ??
          modelItem.imposto.pis?.pisoutr?.cst,
        itemCSTCOFINS:
          modelItem.imposto.cofins?.cofinsaliq?.cst ??
          modelItem.imposto.cofins?.cofinsqtde?.cst ??
          modelItem.imposto.cofins?.cofinsnt?.cst ??
          modelItem.imposto.cofins?.cofinssn?.cst ??
          modelItem.imposto.cofins?.cofinsoutr?.cst,
        itemICMSCST:
          modelItem.imposto.icms.icms?.cst ??
          modelItem.imposto.icms.icmssn?.csosn,
        itemICMSOrig:
          modelItem.imposto.icms.icms?.orig ??
          modelItem.imposto.icms.icmssn?.orig,
      };

      this.items.push(item);
    });

    return this.items;
  }
}
