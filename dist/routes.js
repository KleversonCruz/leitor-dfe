"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const report_controller_1 = require("./controllers/report-controller");
function routes(app) {
    app.post('/report/details', report_controller_1.ReportController.generateReport);
}
exports.routes = routes;
//# sourceMappingURL=routes.js.map