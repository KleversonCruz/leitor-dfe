"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_handler_1 = require("./errors/error-handler");
const routes_1 = require("./routes");
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;
app.use(fileUpload({
    createParentPath: true,
    limits: {
        fileSize: 2 * 1024 * 1024 * 1024, //2MB max file(s) size
    },
}));
(0, routes_1.routes)(app);
app.use(error_handler_1.errorHandler);
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map