import { BrasilUfs } from '../enums/brasil-ufs';
import { DfeModels } from '../enums/dfe-models';

export class Format {
  public static date(dateString: string): string {
    const year = +dateString.slice(0, 4);
    const month = +dateString.slice(4, 6);
    const day = +dateString.slice(6, 8);

    return new Date(year, month - 1, day).toLocaleDateString();
  }

  public static dfeModel(mod: string) {
    const index = +mod;
    return DfeModels[index];
  }

  public static brasilUf(cUF: string) {
    const index = +cUF;
    return BrasilUfs[index];
  }
}
