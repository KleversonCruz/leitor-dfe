export class Format {
  public static toBrlCurrency(value: number): string {
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
  }

  public static toLocaleDate(dateString: string): string {
    dateString = dateString.replace(/-/g, '');
    const year = +dateString.slice(0, 4);
    const month = +dateString.slice(4, 6);
    const day = +dateString.slice(6, 8);

    return new Date(year, month - 1, day).toLocaleDateString('pt-br');
  }

  public static toCpfCnpjMask(value: string): string {
    if (!value) {
      return undefined;
    }
    //CPF
    if (value.length === 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }
    //CNPJ
    else if (value.length === 14) {
      return value.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
        '$1.$2.$3/$4-$5',
      );
    }
  }
}
