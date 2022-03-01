import { BadRequest } from '../errors/bad-request';
import { AttachmentFile } from '../interfaces/attachment-file';
import { Document } from '../models/document';
import { Mapping } from './mapping';

const converter = require('xml-js');

const options = {
  compact: true,
  spaces: 4,
  textKey: 'text',
};

export class XmlParser {
  public static toJs(xmlFile: AttachmentFile): Document {
    const buffer = xmlFile.data.toString();

    const json = converter.xml2js(buffer, options);

    if (json.CFe) {
      return Mapping.cfe(json.CFe.infCFe);
    }
    if (json.CFeCanc) {
      return Mapping.cfeCanc(json.CFeCanc.infCFe);
    }

    throw new BadRequest(`O arquivo ${xmlFile.name} não é um XML válido`);
  }
}
