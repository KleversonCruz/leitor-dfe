import { Document } from '../models/document';
import { Documents } from '../models/documents';
import { Request, Response, NextFunction } from 'express';
import { BadRequest } from '../errors/bad-request';
import { XmlFile } from '../interfaces/xml-file';

interface uploadRequest extends Request {
  files: any;
}

export class DfeController {
  static async readArrayDocuments(
    req: uploadRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.files) {
        throw new BadRequest('Nenhum arquivo foi carregado');
      }

      const { xml: files } = req.files;
      const documents = new Documents();
      const xmlFiles = Array.isArray(files) ? files : [files];

      xmlFiles.forEach((file: XmlFile) => {
        if (file.mimetype !== 'application/xml') {
          throw new BadRequest(`O arquivo ${file.name} não é um XML válido`);
        }

        const document = Document.createFromFile(file);
        documents.add(document);
      });

      const csv = await documents.report();

      const fileData = Buffer.from(csv);
      const fileName = 'report.csv';
      const fileType = 'text/csv';

      res.writeHead(200, {
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Type': fileType,
      });
      res.end(fileData);
    } catch (error) {
      next(error);
    }
  }
}
