interface Det {
  _attributes: { nitem: string };
  prod: {
    cprod: string;
    cean: string;
    xprod: string;
    ncm: string;
    cfop: string;
    ucom: string;
    qcom: string;
    vuncom: string;
    vprod: string;
    vdesc: string;
    ceantrib: string;
    utrib: string;
    qtrib: string;
    vuntrib: string;
    indtot: string;
  };
  imposto: {
    vtottrib: string;
    icms: {
      icms: {
        orig: string;
        cst: string;
      };
      icmspart: {
        orig: string;
        cst: string;
      };
      icmsst: {
        orig: string;
        cst: string;
      };
      icmssn: {
        orig: string;
        csosn: string;
      };
    };
    pis: {
      pisaliq: { cst: string };
      pisqtde: { cst: string };
      pisnt: { cst: string };
      pisoutr: { cst: string };
    };
    cofins: {
      cofinsaliq: { cst: string };
      cofinsqtde: { cst: string };
      cofinsnt: { cst: string };
      cofinsoutr: { cst: string };
    };
  };
}

interface Ide {
  cuf: string;
  cnf: string;
  natop: string;
  mod: string;
  serie: string;
  nnf: string;
  dhemi: string;
  dhsaient: string;
  tpnf: string;
  iddest: string;
  cmunfg: string;
  tpimp: string;
  tpemis: string;
  cdv: string;
  tpamb: string;
  finnfe: string;
  indfinal: string;
  indpres: string;
  procemi: string;
  verproc: string;
}

interface Emit {
  cnpj: string;
  xnome: string;
  xfant: string;
  enderemit: {
    xlgr: string;
    xcpl: string;
    nro: string;
    xbairro: string;
    cmun: string;
    xmun: string;
    uf: string;
    cep: string;
    cpais: string;
    xpais: string;
    fone: string;
  };
  ie: string;
  crt: string;
}

interface Dest {
  cpf: string;
  cnpj: string;
  xnome: string;
  enderdest: {
    xlgr: string;
    nro: string;
    xbairro: string;
    cmun: string;
    xmun: string;
    xcpl: string;
    uf: string;
    cep: string;
    cpais: string;
    xpais: string;
    fone: string;
  };
  indiedest: string;
  email: string;
}

interface Total {
  icmstot: {
    vbc: string;
    vicms: string;
    vicmsdeson: string;
    vfcpufdest: string;
    vicmsufdest: string;
    vicmsufremet: string;
    vfcp: string;
    vbcst: string;
    vst: string;
    vfcpst: string;
    vfcpstret: string;
    vprod: string;
    vfrete: string;
    vseg: string;
    vdesc: string;
    vii: string;
    vipi: string;
    vipidevol: string;
    vpis: string;
    vcofins: string;
    voutro: string;
    vnf: string;
    vtottrib: string;
  };
}

export interface NfeSchema {
  _attributes: {
    id: string;
  };
  ide: Ide;
  emit: Emit;
  dest: Dest;
  det: Det[] | Det;
  total: Total;
  transp: {
    modfrete: string;
    vol: {
      qvol: string;
    };
  };
  pag: {
    detpag: {
      tpag: string;
      vpag: string;
    };
  };
  infadic: { infadfisco: string };
}
