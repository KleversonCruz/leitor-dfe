import { DfeController } from './controllers/dfe-controller';
import { errorHandler } from './middlewares/error-handler';

const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
const port = 3000;

app.use(
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 2 * 1024 * 1024 * 1024, //2MB max file(s) size
    },
  }),
);

app.post('/upload', DfeController.readArrayDocuments);

app.use(errorHandler);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
