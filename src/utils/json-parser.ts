const converter = require('json-2-csv');

const options = {
  delimiter: {
    field: ';',
  },
};

export class jsonParser {
  public static async toCsv(array: any[]) {
    return await converter.json2csvAsync(array, options);
  }
}
