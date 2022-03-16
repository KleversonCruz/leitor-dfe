import { BadRequest } from '../errors/bad-request';
import { AttachmentFile } from '../interfaces/attachment-file';
import { DfeModel } from '../interfaces/dfe-model';
import { CFeMapping } from '../mappings/cfe-mapping';
import { NFeMapping } from '../mappings/nfe-mapping';

const converter = require('xml-js');

function removeJsonTextAttribute(val: string, parentElement: any) {
  try {
    var keyNo = Object.keys(parentElement._parent).length;
    var keyName = Object.keys(parentElement._parent)[keyNo - 1];

    parentElement._parent[keyName] = val;
  } catch (e) {}
}

function formatElementName(val: string) {
  return val.replace(/^(ICMS|ICMSSN)\d+$/gi, '$1').toLowerCase();
}

const options = {
  compact: true,
  elementNameFn: formatElementName,
  attributeNameFn: function (val: string) {
    return val.toLowerCase();
  },
  textFn: removeJsonTextAttribute,
};

export class XmlParser {
  public static toJs(xmlFile: AttachmentFile): DfeModel {
    const buffer = xmlFile.data.toString();

    const json = converter.xml2js(buffer, options);
    
    if (json.cfe) {
      const mapping = new CFeMapping(json.cfe.infcfe);
      return mapping;
    }
    if (json.cfecanc) {
      const mapping = new CFeMapping(json.cfecanc.infcfe);
      return mapping;
    }

    if (json.nfeproc) {
      const mapping = new NFeMapping(json.nfeproc.nfe.infnfe);
      return mapping;
    }
    if (json.nfe) {
      const mapping = new NFeMapping(json.nfe.infnfe);
      return mapping;
    }

    throw new BadRequest(`O arquivo ${xmlFile.name} não é um XML válido`);
  }
}
