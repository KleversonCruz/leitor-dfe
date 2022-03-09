import { errorHandler } from './errors/error-handler';
import { routes } from './routes';

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


routes(app);

app.use(errorHandler);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
