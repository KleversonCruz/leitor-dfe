"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportController = void 0;
const dfes_1 = require("../models/dfes");
const bad_request_1 = require("../errors/bad-request");
const xml_parser_1 = require("../utils/xml-parser");
const report_1 = require("../models/report");
class ReportController {
    static generateReport(req, res, next) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                checkIfExistFilesInRequest(req);
                const keys = getKeysArray((_a = req.body) === null || _a === void 0 ? void 0 : _a.keys);
                const excludeKeys = getKeysArray((_b = req.body) === null || _b === void 0 ? void 0 : _b.excludeKeys);
                const unwindArrays = (_c = req.body) === null || _c === void 0 ? void 0 : _c.unwindArrays;
                const fieldDelimiter = (_d = req.body) === null || _d === void 0 ? void 0 : _d.fieldDelimiter;
                const { xml: files } = req.files;
                const documents = getDocumentsFromFiles(files);
                const report = yield new report_1.Report(documents).generate(keys, excludeKeys, unwindArrays, fieldDelimiter);
                const attachment = {
                    name: 'report.csv',
                    data: Buffer.from(report),
                    mimetype: 'text/csv',
                };
                writeHeader(res, attachment);
                res.end(attachment.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ReportController = ReportController;
function getKeysArray(keys) {
    if (!keys) {
        return [];
    }
    return keys.replace(/\s/g, '').split(',');
}
function checkIfExistFilesInRequest(req) {
    if (!req.files) {
        throw new bad_request_1.BadRequest('Nenhum arquivo foi carregado');
    }
}
function getDocumentsFromFiles(files) {
    const documents = new dfes_1.Dfes();
    const xmlFiles = Array.isArray(files) ? files : [files];
    xmlFiles.forEach((file) => {
        if (file.mimetype !== 'application/xml') {
            throw new bad_request_1.BadRequest(`O arquivo ${file.name} não é um XML válido`);
        }
        const document = xml_parser_1.XmlParser.toJs(file);
        documents.add(document);
    });
    return documents;
}
function writeHeader(res, file) {
    res.writeHead(200, {
        'Content-Disposition': `attachment; filename="${file.name}"`,
        'Content-Type': file.mimetype,
    });
}
//# sourceMappingURL=report-controller.js.map