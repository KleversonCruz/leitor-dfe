"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlParser = void 0;
const bad_request_1 = require("../errors/bad-request");
const cfe_mapping_1 = require("../mappings/cfe-mapping");
const nfe_mapping_1 = require("../mappings/nfe-mapping");
const converter = require('xml-js');
function removeJsonTextAttribute(val, parentElement) {
    try {
        var keyNo = Object.keys(parentElement._parent).length;
        var keyName = Object.keys(parentElement._parent)[keyNo - 1];
        parentElement._parent[keyName] = val;
    }
    catch (e) { }
}
function formatElementName(val) {
    return val.replace(/^(ICMS|ICMSSN)\d+$/gi, '$1').toLowerCase();
}
const options = {
    compact: true,
    elementNameFn: formatElementName,
    attributeNameFn: function (val) {
        return val.toLowerCase();
    },
    textFn: removeJsonTextAttribute,
};
class XmlParser {
    static toJs(xmlFile) {
        const buffer = xmlFile.data.toString();
        const json = converter.xml2js(buffer, options);
        if (json.cfe) {
            const mapping = new cfe_mapping_1.CFeMapping(json.cfe.infcfe);
            return mapping;
        }
        if (json.cfecanc) {
            const mapping = new cfe_mapping_1.CFeMapping(json.cfecanc.infcfe);
            return mapping;
        }
        if (json.nfeproc) {
            const mapping = new nfe_mapping_1.NFeMapping(json.nfeproc.nfe.infnfe);
            return mapping;
        }
        if (json.nfe) {
            const mapping = new nfe_mapping_1.NFeMapping(json.nfe.infnfe);
            return mapping;
        }
        throw new bad_request_1.BadRequest(`O arquivo ${xmlFile.name} não é um XML válido`);
    }
}
exports.XmlParser = XmlParser;
//# sourceMappingURL=xml-parser.js.map