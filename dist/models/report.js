"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const report_mapping_1 = require("../mappings/report-mapping");
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
    generate(keys = [], excludeKeys = [], unwindArrays = false) {
        this.setKeys(keys);
        this.setExcludeKeys(excludeKeys);
        this.options.unwindArrays = unwindArrays;
        const rows = this.documents.list().flat();
        return json_parser_1.jsonParser.toCsv(rows, this.options);
    }
}
exports.Report = Report;
//# sourceMappingURL=report.js.map