import { ReportJsDto } from '../dtos/report-js.dto';

export default function getTotalValue(reportJsDtos: ReportJsDto[]) {
  const itens = reportJsDtos.flatMap((x) => x.ide.vDocumento);
  if (itens.length > 1) {
    const reducedArray = itens.reduce((accumulator, item) => {
      return accumulator + item;
    });
    return reducedArray;
  }
  return 0;
}
