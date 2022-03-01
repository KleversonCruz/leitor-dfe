const converter = require('json-2-csv');

const options = {
  delimiter: {
    wrap: '"',
    field: ',',
    eol: '\n',
  },
  prependHeader: true,
  sortHeader: false,
  excelBOM: true,
  trimHeaderValues: true,
  trimFieldValues: true,
};

export class jsonParser {
  public static async toCsv(array: any[]) {
    return await converter.json2csvAsync(array, options);
  }
}
