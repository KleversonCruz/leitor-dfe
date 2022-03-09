"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const report_controller_1 = require("./controllers/report-controller");
function routes(app) {
    app.post('/report', report_controller_1.ReportController.generateReport);
    app.route('/').get(function (req, res) {
        res.redirect('https://documenter.getpostman.com/view/16890150/UVsFx7vb');
    });
}
exports.routes = routes;
//# sourceMappingURL=routes.js.map