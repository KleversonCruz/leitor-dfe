import { Mapper } from 'src/core/base/mapper';
import { ReportJsDto } from 'src/shared/dtos/report-js.dto';
import { Format } from 'src/shared/utils/format';
import { CfeSchema } from '../schemas/cfe.schema';

export class CfeMapper extends Mapper<ReportJsDto, CfeSchema> {
  mapTo(data: CfeSchema): ReportJsDto {
    const report = new ReportJsDto();

    report.ide = {
      chave: data._attributes.id,
      serie: data.ide.nseriesat,
      status: data._attributes?.chcanc ? 'CANCELADO' : 'AUTORIZADO',
      nNF: data.ide?.ncfe,
      modelo: data.ide.mod,
      dtEmissao: Format.toLocaleDate(data.ide.demi),
      vDocumento: +data.total.vcfe,
    };

    report.emit = {
      emitCNPJ: Format.toCpfCnpjMask(data.emit.cnpj),
      emitNome: data.emit.xnome,
      emitMun: data.emit.enderemit.xmun,
      emitUF: data.ide.cuf,
    };

    report.dest = {
      destCPFCNPJ: Format.toCpfCnpjMask(data.dest?.cnpj ?? data.dest?.cpf),
      destNome: data.dest?.xnome,
    };

    report.items = [];

    const det = Array.isArray(data.det) ? data.det : [data.det];

    det.map(function (item) {
      report.items.push({
        itemEAN: item.prod.cean,
        itemDescricao: item.prod.xprod,
        itemNCM: item.prod.ncm,
        itemCFOP: item.prod.cfop,
        itemUnidade: item.prod.ucom,
        itemQuantidade: +item.prod.qcom,
        itemVUnit: +item.prod.vuncom,
        itemVDesc: +item.prod.vdesc,
        itemVTotal: +item.prod.vitem,
        itemCSTPIS:
          item.imposto.pis?.pisaliq?.cst ??
          item.imposto.pis?.pisqtde?.cst ??
          item.imposto.pis?.pisnt?.cst ??
          item.imposto.pis?.pissn?.cst ??
          item.imposto.pis?.pisoutr?.cst,
        itemCSTCOFINS:
          item.imposto.cofins?.cofinsaliq?.cst ??
          item.imposto.cofins?.cofinsqtde?.cst ??
          item.imposto.cofins?.cofinsnt?.cst ??
          item.imposto.cofins?.cofinssn?.cst ??
          item.imposto.cofins?.cofinsoutr?.cst,
        itemICMSCST:
          item.imposto.icms.icms?.cst ?? item.imposto.icms.icmssn?.csosn,
        itemICMSOrig:
          item.imposto.icms.icms?.orig ?? item.imposto.icms.icmssn?.orig,
      });
    });

    return report;
  }
}
