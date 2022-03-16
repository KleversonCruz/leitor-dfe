"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const report_mapping_1 = require("../mappings/report-mapping");
const formatter_1 = require("../utils/formatter");
const json_parser_1 = require("../utils/json-parser");
class Report {
    constructor(documents) {
        this.documents = documents;
        this.options = {
            delimiter: {
                wrap: '"',
                field: ',',
                eol: '\n',
            },
            trimHeaderFields: true,
            emptyFieldValue: '',
            keys: report_mapping_1.ReportMapping.getKeys(),
            excelBOM: true,
            preventCsvInjection: true,
            parseValue: (value) => formatter_1.Formatter.toBrlCurrency(value),
        };
    }
    setKeys(keys) {
        if (keys.filter(Boolean).length > 0) {
            this.options.keys = keys.map((key) => {
                return report_mapping_1.ReportMapping.getKey(key);
            });
        }
    }
    setExcludeKeys(keys) {
        if (keys.filter(Boolean).length > 0) {
            this.options.excludeKeys = keys.map((key) => {
                return report_mapping_1.ReportMapping.getKey(key).field;
            });
        }
    }
    generate(keys = [], excludeKeys = [], unwindArrays = false, fieldDelimiter = ',') {
        this.setKeys(keys);
        this.setExcludeKeys(excludeKeys);
        this.options.unwindArrays = unwindArrays;
        this.options.delimiter = {
            field: fieldDelimiter,
        };
        this.documents.addTotalizerRow();
        const rows = this.documents.list.flat();
        return json_parser_1.jsonParser.toCsv(rows, this.options);
    }
}
exports.Report = Report;
//# sourceMappingURL=report.js.map