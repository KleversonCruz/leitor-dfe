export interface Item {
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
