"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlParser = void 0;
const bad_request_1 = require("../errors/bad-request");
const cfe_mapping_1 = require("../mappings/cfe-mapping");
const nfe_mapping_1 = require("../mappings/nfe-mapping");
const converter = require('xml-js');
const options = {
    compact: true,
    spaces: 4,
    textKey: 'text',
};
class XmlParser {
    static toJs(xmlFile) {
        const buffer = xmlFile.data.toString();
        const json = converter.xml2js(buffer, options);
        if (json.CFe) {
            const mapping = new cfe_mapping_1.CFeMapping(json.CFe.infCFe);
            return mapping;
        }
        if (json.CFeCanc) {
            const mapping = new cfe_mapping_1.CFeMapping(json.CFeCanc.infCFe);
            return mapping;
        }
        if (json.nfeProc) {
            const mapping = new nfe_mapping_1.NFeMapping(json.nfeProc.NFe.infNFe);
            return mapping;
        }
        if (json.NFe) {
            const mapping = new nfe_mapping_1.NFeMapping(json.NFe.infNFe);
            return mapping;
        }
        throw new bad_request_1.BadRequest(`O arquivo ${xmlFile.name} não é um XML válido`);
    }
}
exports.XmlParser = XmlParser;
//# sourceMappingURL=xml-parser.js.map