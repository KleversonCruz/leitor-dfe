import { Document } from '../models/document';
import { Documents } from '../models/documents';
import { Request, Response, NextFunction } from 'express';
import { BadRequest } from '../errors/bad-request';
import { AttachmentFile } from '../interfaces/attachment-file';

interface uploadRequest extends Request {
  files: any;
}

export class ReportController {
  public static async documentsItems(
    req: uploadRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      checkIfExistFilesInRequest(req);

      const { xml: files } = req.files;
      const documents = getDocumentsFromFiles(files);
      const csv = await documents.report.items();

      const attachment: AttachmentFile = {
        name: 'report.csv',
        data: Buffer.from(csv),
        mimetype: 'text/csv',
      };
      writeHeader(res, attachment);

      res.end(attachment.data);
    } catch (error) {
      next(error);
    }
  }

  public static async documentsDetails(
    req: uploadRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      checkIfExistFilesInRequest(req);

      const { xml: files } = req.files;
      const documents = getDocumentsFromFiles(files);
      const csv = await documents.report.details();

      const attachment: AttachmentFile = {
        name: 'report.csv',
        data: Buffer.from(csv),
        mimetype: 'text/csv',
      };
      writeHeader(res, attachment);

      res.end(attachment.data);
    } catch (error) {
      next(error);
    }
  }
}

function checkIfExistFilesInRequest(req: uploadRequest) {
  if (!req.files) {
    throw new BadRequest('Nenhum arquivo foi carregado');
  }
}

function getDocumentsFromFiles(files: any): Documents {
  const documents = new Documents();
  const xmlFiles = Array.isArray(files) ? files : [files];

  xmlFiles.forEach((file: AttachmentFile) => {
    if (file.mimetype !== 'application/xml') {
      throw new BadRequest(`O arquivo ${file.name} não é um XML válido`);
    }

    const document = Document.createFromFile(file);
    documents.add(document);
  });
  return documents;
}

function writeHeader(res: Response, file: AttachmentFile) {
  res.writeHead(200, {
    'Content-Disposition': `attachment; filename="${file.name}"`,
    'Content-Type': file.mimetype,
  });
}
