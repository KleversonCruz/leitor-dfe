export interface Item {
  itemEAN?: string;
  itemDescricao: string;
  itemNCM?: string;
  itemCST?: string;
  itemCFOP?: string;
  itemUnidade?: string;
  itemQuantidade?: string;
  itemVUnit?: string;
  itemVDesc?: string;
  itemVTotal?: string;

  imposto: {
    itemVIcms?: string;
    itemVPIS?: string;
    itemVCOFINS?: string;
  };
}
