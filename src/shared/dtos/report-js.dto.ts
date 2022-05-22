export class Emit {
  emitCNPJ?: string;
  emitNome?: string;
  emitMun?: string;
  emitUF?: string;
}

export class Ide {
  chave?: string;
  serie?: string;
  status?: string;
  nNF?: string;
  modelo?: string;
  dtEmissao?: string;
  vDocumento?: number;
}

export class Item {
  itemEAN?: string;
  itemDescricao?: string;
  itemUnidade?: string;
  itemQuantidade?: number;
  itemVUnit?: number;
  itemVDesc?: number;
  itemVTotal?: number;

  itemNCM?: string;
  itemCFOP?: string;
  itemICMSOrig?: string;
  itemICMSCST?: string;
  itemCSTPIS?: string;
  itemCSTCOFINS?: string;
}

export class Dest {
  destCPFCNPJ?: string;
  destNome?: string;
  destMun?: string;
  destUF?: string;
}

export class ReportJsDto {
  emit?: Emit;
  items?: Item[];
  ide?: Ide;
  dest?: Dest;
  valorTotal?: number;
}
