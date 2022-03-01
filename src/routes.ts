import { Application } from 'express';
import { ReportController } from './controllers/report-controller';

export function routes(app: Application) {
  app.post('/report/details', ReportController.documentsDetails);

  app.post('/report/items', ReportController.documentsItems);
}
