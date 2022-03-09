import { BadRequest } from '../errors/bad-request';
import { AttachmentFile } from '../interfaces/attachment-file';
import { DfeModel } from '../interfaces/dfe-model';
import { CFeMapping } from '../mappings/cfe-mapping';
import { NFeMapping } from '../mappings/nfe-mapping';


const converter = require('xml-js');

const options = {
  compact: true,
  spaces: 4,
  textKey: 'text',
};

export class XmlParser {
  public static toJs(xmlFile: AttachmentFile): DfeModel {
    const buffer = xmlFile.data.toString();

    const json = converter.xml2js(buffer, options);
    
    if (json.CFe) {
      const mapping = new CFeMapping(json.CFe.infCFe);      
       return mapping;
    }
    if (json.CFeCanc) {
      const mapping = new CFeMapping(json.CFeCanc.infCFe);
      return mapping;
    }

    if (json.nfeProc) {
      const mapping = new NFeMapping(json.nfeProc.NFe.infNFe);
      return mapping;
    }

    if (json.NFe) {
      const mapping = new NFeMapping(json.NFe.infNFe);
      return mapping;
    }

    throw new BadRequest(`O arquivo ${xmlFile.name} não é um XML válido`);
  }
}
