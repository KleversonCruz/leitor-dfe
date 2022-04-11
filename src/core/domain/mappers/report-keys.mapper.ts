import { Mapper } from 'src/core/base/mapper';
import { ReportKeysEnum } from 'src/shared/enums/report-keys.enum';

export class ReportKeysMapper extends Mapper<string[], string> {
  mapTo(data: string): any {
    const keysString = data?.replace(/\s/g, '').split(',');

    if (!keysString || keysString.length === 0) {
      const keys = Object.entries(ReportKeysEnum).map((element: any) => {
        return {
          field: element[1],
          title: element[0],
        };
      });
      return keys;
    }

    const keys = keysString.map((key) => {
      return {
        field: ReportKeysEnum[key] || key,
        title: key,
      };
    });

    return keys;
  }
}
