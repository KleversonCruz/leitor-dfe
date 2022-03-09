"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const bad_request_1 = require("./bad-request");
function errorHandler(error, req, res, next) {
    let code = 500;
    if (error instanceof bad_request_1.BadRequest) {
        code = 400;
    }
    res.status(code).json({
        message: error.message,
    });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map