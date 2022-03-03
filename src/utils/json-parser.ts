import { ReportOptions } from '../interfaces/report-options';
import * as converter from 'json-2-csv';

export class jsonParser {
  public static async toCsv(array: any[], options: ReportOptions) {
    return await converter.json2csvAsync(array, options);
  }
}
