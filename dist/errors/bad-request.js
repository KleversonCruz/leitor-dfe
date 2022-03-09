"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
class BadRequest extends Error {
    constructor(message) {
        super(message);
        this.name = 'Bad Request';
    }
}
exports.BadRequest = BadRequest;
//# sourceMappingURL=bad-request.js.map