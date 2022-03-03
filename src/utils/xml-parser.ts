import { BadRequest } from '../errors/bad-request';
import { AttachmentFile } from '../interfaces/attachment-file';
import { CFeMapping } from '../mappings/cfe-mapping';
import { Dfe } from '../models/dfe';

const converter = require('xml-js');

const options = {
  compact: true,
  spaces: 4,
  textKey: 'text',
};

export class XmlParser {
  public static toJs(xmlFile: AttachmentFile): Dfe {
    const buffer = xmlFile.data.toString();

    const json = converter.xml2js(buffer, options);

    if (json.CFe) {
      const mapping = new CFeMapping(json.CFe.infCFe);
      return new Dfe(mapping);
    }
    if (json.CFeCanc) {
      const mapping = new CFeMapping(json.CFeCanc.infCFe);
      return new Dfe(mapping);
    }
    throw new BadRequest(`O arquivo ${xmlFile.name} não é um XML válido`);
  }
}
