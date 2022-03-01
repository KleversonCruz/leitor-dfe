import { Estados } from '../enums/estados';
import { Modelos } from '../enums/modelos';

export class Formats {
  public static date(dateString: string): string {
    const year = +dateString.slice(0, 4);
    const month = +dateString.slice(4, 6);
    const day = +dateString.slice(6, 8);

    return new Date(year, month - 1, day).toLocaleDateString();
  }

  public static modelo(mod: string) {
    const index = +mod;
    return Modelos[index];
  }

  public static estado(cUF: string) {
    const index = +cUF;
    return Estados[index];
  }
}
