import { Application } from 'express';
import { ReportController } from './controllers/report-controller';

export function routes(app: Application) {
  app.post('/report', ReportController.generateReport);
  
  app.route('/').get(function (req, res) {
    res.redirect('https://documenter.getpostman.com/view/16890150/UVsFx7vb');
  });
}
