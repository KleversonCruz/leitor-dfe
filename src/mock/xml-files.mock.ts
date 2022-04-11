import { ReportJsDto } from 'src/shared/dtos/report-js.dto';

const cfeFile: Array<Express.Multer.File> = [
  {
    fieldname: 'files',
    originalname: 'CFe.xml',
    encoding: '7bit',
    mimetype: 'application/xml',
    destination: null,
    buffer: Buffer.from(
      `<CFe><infCFe Id="CFe35200000000000000000000000000000000000000000" versao="0.07" versaoDadosEnt="0.07" versaoSB="020200"><ide><cUF>35</cUF><cNF>364872</cNF><mod>59</mod><nserieSAT>000111111</nserieSAT><nCFe>001081</nCFe><dEmi>20201010</dEmi><hEmi>112235</hEmi><cDV>1</cDV><tpAmb>1</tpAmb><CNPJ>11111111111111</CNPJ><numeroCaixa>001</numeroCaixa></ide><emit><CNPJ>11111111111111</CNPJ><xNome>EMITENTE TESTE</xNome><xFant>EMITENTE TESTE</xFant><enderEmit><xLgr>RUA 1</xLgr><nro>1</nro><xCpl>Nao Informado</xCpl><xBairro>CENTRO</xBairro><xMun>PIRASSUNUNGA</xMun><CEP>13630000</CEP></enderEmit><IE>112345684321</IE><cRegTrib>1</cRegTrib><cRegTribISSQN>1</cRegTribISSQN><indRatISSQN>S</indRatISSQN></emit><dest><CPF>11111111111</CPF></dest><det nItem="1"><prod><cProd>00010</cProd><xProd>Relogio</xProd><NCM>91021110</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1.0000</qCom><vUnCom>990.00</vUnCom><vProd>990.00</vProd><indRegra>A</indRegra><vItem>990.00</vItem><vRatDesc>0.00</vRatDesc><vRatAcr>0.00</vRatAcr></prod><imposto><vItem12741>266.80</vItem12741><ICMS><ICMSSN102><Orig>0</Orig><CSOSN>102</CSOSN></ICMSSN102></ICMS><PIS><PISSN><CST>49</CST></PISSN></PIS><COFINS><COFINSSN><CST>49</CST></COFINSSN></COFINS></imposto></det><total><ICMSTot><vICMS>0.00</vICMS><vProd>990.00</vProd><vDesc>0.00</vDesc><vPIS>0.00</vPIS><vCOFINS>0.00</vCOFINS><vPISST>0.00</vPISST><vCOFINSST>0.00</vCOFINSST><vOutro>0.00</vOutro></ICMSTot><vCFe>990.00</vCFe><vCFeLei12741>266.80</vCFeLei12741></total><pgto><MP><cMP>03</cMP><vMP>590.00</vMP><cAdmC>999</cAdmC></MP><MP><cMP>04</cMP><vMP>400.00</vMP><cAdmC>999</cAdmC></MP><vTroco>0.00</vTroco></pgto></infCFe></CFe>`,
      'utf8',
    ),
    filename: 'CFe.xml',
    path: null,
    size: 3190,
    stream: null,
  },
];

const nfceFile: Array<Express.Multer.File> = [
  {
    fieldname: 'files',
    originalname: 'NFCe.xml',
    encoding: '7bit',
    mimetype: 'application/xml',
    destination: null,
    buffer: Buffer.from(
      `<nfeProc versao="4.00" xmlns="http://www.portalfiscal.inf.br/nfe"><NFe xmlns="http://www.portalfiscal.inf.br/nfe"><infNFe Id="NFe35000000000000000000000000000000000000000002" versao="4.00"><ide><cUF>50</cUF><cNF>10364257</cNF><natOp>Venda</natOp><mod>65</mod><serie>1</serie><nNF>10178</nNF><dhEmi>2021-05-03T12:51:57-02:00</dhEmi><tpNF>1</tpNF><idDest>1</idDest><cMunFG>5001003</cMunFG><tpImp>4</tpImp><tpEmis>1</tpEmis><cDV>2</cDV><tpAmb>1</tpAmb><finNFe>1</finNFe><indFinal>1</indFinal><indPres>1</indPres><procEmi>0</procEmi><verProc>1.0</verProc></ide><emit><CNPJ>11111111111111</CNPJ><xNome>EMITENTE TESTE</xNome><enderEmit><xLgr>R DUQUE DE CAXIAS</xLgr><nro>1</nro><xBairro>Centro</xBairro><cMun>5001003</cMun><xMun>APARECIDA DO TABOADO</xMun><UF>MS</UF><CEP>79570000</CEP></enderEmit><IE>123456784532</IE><CRT>3</CRT></emit><det nItem="1"><prod><cProd>7896112123057</cProd><cEAN>7896112123057</cEAN><xProd>NORFLOXACINO 400MG CX 14 COMP</xProd><NCM>30049099</NCM><CEST>1300100</CEST><CFOP>5405</CFOP><uCom>UN</uCom><qCom>1.0000</qCom><vUnCom>29.610</vUnCom><vProd>29.61</vProd><cEANTrib>7896112123057</cEANTrib><uTrib>UN</uTrib><qTrib>1.0000</qTrib><vUnTrib>29.610</vUnTrib><vDesc>4.45</vDesc><indTot>1</indTot></prod><imposto><ICMS><ICMS60><orig>0</orig><CST>60</CST></ICMS60></ICMS><PIS><PISAliq><CST>01</CST><vBC>25.16</vBC><pPIS>0.65</pPIS><vPIS>0.16</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>25.16</vBC><pCOFINS>3.00</pCOFINS><vCOFINS>0.75</vCOFINS></COFINSAliq></COFINS></imposto></det><det nItem="2"><prod><cProd>7896026301428</cProd><cEAN>7896026301428</cEAN><xProd>BUSCOPAN CPTO DRG C/20</xProd><NCM>30044990</NCM><CFOP>5405</CFOP><uCom>UN</uCom><qCom>1.0000</qCom><vUnCom>19.170</vUnCom><vProd>19.17</vProd><cEANTrib>7896026301428</cEANTrib><uTrib>UN</uTrib><qTrib>1.0000</qTrib><vUnTrib>19.170</vUnTrib><vDesc>2.88</vDesc><indTot>1</indTot></prod><imposto><ICMS><ICMS60><orig>0</orig><CST>60</CST></ICMS60></ICMS><PIS><PISNT><CST>04</CST></PISNT></PIS><COFINS><COFINSNT><CST>04</CST></COFINSNT></COFINS></imposto></det><total><ICMSTot><vBC>0.00</vBC><vICMS>0.00</vICMS><vICMSDeson>0.00</vICMSDeson><vFCP>0.00</vFCP><vBCST>0.00</vBCST><vST>0.00</vST><vFCPST>0.00</vFCPST><vFCPSTRet>0.00</vFCPSTRet><vProd>48.78</vProd><vFrete>0.00</vFrete><vSeg>0.00</vSeg><vDesc>7.33</vDesc><vII>0.00</vII><vIPI>0.00</vIPI><vIPIDevol>0.00</vIPIDevol><vPIS>0.16</vPIS><vCOFINS>0.75</vCOFINS><vOutro>0.00</vOutro><vNF>41.45</vNF></ICMSTot></total><transp><modFrete>9</modFrete></transp><pag><detPag><tPag>05</tPag><vPag>41.45</vPag></detPag></pag></infNFe></NFe></nfeProc>`,
      'utf8',
    ),
    filename: 'NFCe.xml',
    path: null,
    size: 3190,
    stream: null,
  },
];

const nfeFile: Array<Express.Multer.File> = [
  {
    fieldname: 'files',
    originalname: 'NFe.xml',
    encoding: '7bit',
    mimetype: 'application/xml',
    destination: null,
    buffer: Buffer.from(
      `<?xml version="1.0" encoding="UTF-8"?><nfeProc versao="4.00" xmlns="http://www.portalfiscal.inf.br/nfe"><NFe xmlns="http://www.portalfiscal.inf.br/nfe"><infNFe versao="4.00" Id="NFe35000000000000000000000000000000000000000000"><ide><cUF>35</cUF><cNF>1</cNF><natOp>VDA ST DENTRO ESTADO/</natOp><mod>55</mod><serie>1</serie><nNF>1</nNF><dhEmi>2022-02-08T16:39:05-03:00</dhEmi><tpNF>1</tpNF><idDest>1</idDest><cMunFG>3539301</cMunFG><tpImp>1</tpImp><tpEmis>1</tpEmis><cDV>3</cDV><tpAmb>1</tpAmb><finNFe>1</finNFe><indFinal>1</indFinal><indPres>0</indPres><procEmi>0</procEmi><verProc>4.6.41.0</verProc></ide><emit><CNPJ>11111111111111</CNPJ><xNome>EMITENTE TESTE</xNome><xFant>EMITENTE TESTE</xFant><enderEmit><xLgr>AVENIDA DUQUE DE CAXIAS</xLgr><nro>1</nro><xBairro>CENTRO</xBairro><cMun>3539301</cMun><xMun>PIRASSUNUNGA</xMun><UF>SP</UF><CEP>13630000</CEP><cPais>1058</cPais><xPais>BRASIL</xPais><fone>9999999999</fone></enderEmit><IE>123456789123</IE><CRT>1</CRT></emit><dest><CPF>22222222222</CPF><xNome>MARIA APARECIDA</xNome><enderDest><xLgr>RUA ZERO</xLgr><nro>35</nro><xBairro>CENTRO</xBairro><cMun>3539301</cMun><xMun>PIRASSUNUNGA</xMun><UF>SP</UF><CEP>13630000</CEP><cPais>1058</cPais><xPais>Brasil</xPais></enderDest><indIEDest>9</indIEDest></dest><det nItem="1"><prod><cProd>1</cProd><cEAN>7890000000291</cEAN><xProd>ESCAPAMENTO</xProd><NCM>87089200</NCM><CFOP>5405</CFOP><uCom>UN</uCom><qCom>1.0000</qCom><vUnCom>50.0000000000</vUnCom><vProd>50.00</vProd><cEANTrib>7890000000291</cEANTrib><uTrib>UN</uTrib><qTrib>1.0000</qTrib><vUnTrib>50.0000000000</vUnTrib><indTot>1</indTot></prod><imposto><ICMS><ICMSSN500><orig>0</orig><CSOSN>500</CSOSN></ICMSSN500></ICMS><PIS><PISNT><CST>04</CST></PISNT></PIS><COFINS><COFINSNT><CST>04</CST></COFINSNT></COFINS></imposto></det><total><ICMSTot><vBC>0.00</vBC><vICMS>0.00</vICMS><vICMSDeson>0.00</vICMSDeson><vFCP>0.00</vFCP><vBCST>0.00</vBCST><vST>0.00</vST><vFCPST>0.00</vFCPST><vFCPSTRet>0.00</vFCPSTRet><vProd>50.00</vProd><vFrete>0.00</vFrete><vSeg>0.00</vSeg><vDesc>0.00</vDesc><vII>0.00</vII><vIPI>0.00</vIPI><vIPIDevol>0.00</vIPIDevol><vPIS>0.00</vPIS><vCOFINS>0.00</vCOFINS><vOutro>0.00</vOutro><vNF>50.00</vNF></ICMSTot></total><transp><modFrete>0</modFrete><vol><qVol>0</qVol></vol></transp><pag><detPag><indPag>0</indPag><tPag>90</tPag><vPag>0.00</vPag></detPag></pag></infNFe></NFe></nfeProc>`,
      'utf8',
    ),
    filename: 'NFe.xml',
    path: null,
    size: 3190,
    stream: null,
  },
];

const invalidFile: Array<Express.Multer.File> = [
  {
    fieldname: 'files',
    originalname: 'CFe.xml',
    encoding: '7bit',
    mimetype: 'application/xml',
    destination: null,
    buffer: Buffer.from(`<XFe></XFe>`, 'utf8'),
    filename: 'CFe.xml',
    path: null,
    size: 3190,
    stream: null,
  },
];

const cfeJs: ReportJsDto[] = [
  {
    ide: {
      chave: 'CFe35200000000000000000000000000000000000000000',
      serie: '000111111',
      status: 'AUTORIZADO',
      nNF: '001081',
      modelo: '59',
      dtEmissao: '10/10/2020',
      vDocumento: 990,
    },
    emit: {
      emitCNPJ: '11.111.111/1111-11',
      emitNome: 'EMITENTE TESTE',
      emitMun: 'PIRASSUNUNGA',
      emitUF: '35',
    },
    dest: {
      destCPFCNPJ: '111.111.111-11',
    },
    items: [
      {
        itemDescricao: 'Relogio',
        itemNCM: '91021110',
        itemCFOP: '5102',
        itemUnidade: 'UN',
        itemQuantidade: 1,
        itemVUnit: 990,
        itemVDesc: NaN,
        itemVTotal: 990,
        itemCSTPIS: '49',
        itemCSTCOFINS: '49',
        itemICMSCST: '102',
        itemICMSOrig: '0',
      },
    ],
  },
];

const nfceJs: ReportJsDto[] = [
  {
    ide: {
      chave: 'NFe35000000000000000000000000000000000000000002',
      serie: '1',
      status: 'AUTORIZADO',
      nNF: '10364257',
      modelo: '65',
      dtEmissao: '03/05/2021',
      vDocumento: 41.45,
    },
    emit: {
      emitCNPJ: '11.111.111/1111-11',
      emitNome: 'EMITENTE TESTE',
      emitMun: 'APARECIDA DO TABOADO',
      emitUF: '50',
    },
    dest: {},
    items: [
      {
        itemEAN: '7896112123057',
        itemDescricao: 'NORFLOXACINO 400MG CX 14 COMP',
        itemNCM: '30049099',
        itemCFOP: '5405',
        itemUnidade: 'UN',
        itemQuantidade: 1,
        itemVUnit: 29.61,
        itemVDesc: 4.45,
        itemVTotal: 25.16,
        itemCSTPIS: '01',
        itemCSTCOFINS: '01',
        itemICMSCST: '60',
        itemICMSOrig: '0',
      },
      {
        itemEAN: '7896026301428',
        itemDescricao: 'BUSCOPAN CPTO DRG C/20',
        itemNCM: '30044990',
        itemCFOP: '5405',
        itemUnidade: 'UN',
        itemQuantidade: 1,
        itemVUnit: 19.17,
        itemVDesc: 2.88,
        itemVTotal: 16.290000000000003,
        itemCSTPIS: '04',
        itemCSTCOFINS: '04',
        itemICMSCST: '60',
        itemICMSOrig: '0',
      },
    ],
  },
];

const nfeJs: ReportJsDto[] = [
  {
    ide: {
      chave: 'NFe35000000000000000000000000000000000000000000',
      serie: '1',
      status: 'AUTORIZADO',
      nNF: '1',
      modelo: '55',
      dtEmissao: '08/02/2022',
      vDocumento: 50,
    },
    emit: {
      emitCNPJ: '11.111.111/1111-11',
      emitNome: 'EMITENTE TESTE',
      emitMun: 'PIRASSUNUNGA',
      emitUF: '35',
    },
    dest: {
      destCPFCNPJ: '222.222.222-22',
      destNome: 'MARIA APARECIDA',
      destMun: 'PIRASSUNUNGA',
      destUF: 'SP',
    },
    items: [
      {
        itemEAN: '7890000000291',
        itemDescricao: 'ESCAPAMENTO',
        itemNCM: '87089200',
        itemCFOP: '5405',
        itemUnidade: 'UN',
        itemQuantidade: 1,
        itemVUnit: 50,
        itemVDesc: NaN,
        itemVTotal: 50,
        itemCSTPIS: '04',
        itemCSTCOFINS: '04',
        itemICMSCST: '500',
        itemICMSOrig: '0',
      },
    ],
  },
];

const cfeCsvResponse = `emitCNPJ,emitNome,emitMun,status,mod,nNF,serie,chave,dtEmissao,vDocumento,destCPFCNPJ,destNome,itemEAN,itemDescricao,itemUnidade,itemQuantidade,itemVUnit,itemVDesc,itemVTotal,itemNCM,itemCFOP,itemCSTPIS,itemCSTCOFINS,itemICMSCST,itemICMSOrig
11.111.111/1111-11,EMITENTE TESTE,PIRASSUNUNGA,AUTORIZADO,59,001081,000111111,CFe35200000000000000000000000000000000000000000,10/10/2020,"990,00",111.111.111-11,,,Relogio,UN,"1,00","990,00",,"990,00",91021110,5102,49,49,102,0`;

const cfeCsvResponseWithDelimiter = `emitCNPJ;emitNome;emitMun;status;mod;nNF;serie;chave;dtEmissao;vDocumento;destCPFCNPJ;destNome;itemEAN;itemDescricao;itemUnidade;itemQuantidade;itemVUnit;itemVDesc;itemVTotal;itemNCM;itemCFOP;itemCSTPIS;itemCSTCOFINS;itemICMSCST;itemICMSOrig
11.111.111/1111-11;EMITENTE TESTE;PIRASSUNUNGA;AUTORIZADO;59;001081;000111111;CFe35200000000000000000000000000000000000000000;10/10/2020;990,00;111.111.111-11;;;Relogio;UN;1,00;990,00;;990,00;91021110;5102;49;49;102;0`;

const cfeCsvResponseWithKeyFilter = `emitCNPJ;emitNome
11.111.111/1111-11;EMITENTE TESTE`;

const nfceCsvResponseWithTotalizerRow = `emitCNPJ;emitNome;emitMun;status;mod;nNF;serie;chave;dtEmissao;vDocumento;destCPFCNPJ;destNome;itemEAN;itemDescricao;itemUnidade;itemQuantidade;itemVUnit;itemVDesc;itemVTotal;itemNCM;itemCFOP;itemCSTPIS;itemCSTCOFINS;itemICMSCST;itemICMSOrig
11.111.111/1111-11;EMITENTE TESTE;APARECIDA DO TABOADO;AUTORIZADO;65;10364257;1;NFe35000000000000000000000000000000000000000002;03/05/2021;41,45;;;7896112123057;NORFLOXACINO 400MG CX 14 COMP;UN;1,00;29,61;4,45;25,16;30049099;5405;01;01;60;0
11.111.111/1111-11;EMITENTE TESTE;APARECIDA DO TABOADO;AUTORIZADO;65;10364257;1;NFe35000000000000000000000000000000000000000002;03/05/2021;41,45;;;7896026301428;BUSCOPAN CPTO DRG C/20;UN;1,00;19,17;2,88;16,29;30044990;5405;04;04;60;0
;;;;;;;;;;;;;;;2,00;48,78;7,33;41,45;;;;;;`;

export {
  nfeJs,
  nfceJs,
  cfeJs,
  nfeFile,
  nfceFile,
  cfeFile,
  invalidFile,
  cfeCsvResponse,
  cfeCsvResponseWithDelimiter,
  cfeCsvResponseWithKeyFilter,
  nfceCsvResponseWithTotalizerRow,
};
