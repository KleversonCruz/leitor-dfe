import { Dfes } from '../models/dfes';
import { Request, Response, NextFunction } from 'express';
import { BadRequest } from '../errors/bad-request';
import { AttachmentFile } from '../interfaces/attachment-file';
import { XmlParser } from '../utils/xml-parser';
import { Report } from '../models/report';

interface uploadRequest extends Request {
  files: any;
}

export class ReportController {
  public static async generateReport(
    req: uploadRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      checkIfExistFilesInRequest(req);
      const keys = getKeysArray(req.body?.keys);
      const excludeKeys = getKeysArray(req.body?.excludeKeys);
      const fieldDelimiter = req.body?.fieldDelimiter;
      const includeTotalizerRow = getKeyBoolean(req.body?.includeTotalizerRow);
      const unwindArrays = getKeyBoolean(req.body?.unwindArrays);

      const { xml: files } = req.files;

      const documents = getDocumentsFromFiles(files);
      const report = await new Report(documents).generate(
        keys,
        excludeKeys,
        fieldDelimiter,
        includeTotalizerRow,
        unwindArrays,
      );

      const attachment: AttachmentFile = {
        name: 'report.csv',
        data: Buffer.from(report),
        mimetype: 'text/csv',
      };
      writeHeader(res, attachment);

      res.end(attachment.data);
    } catch (error) {
      next(error);
    }
  }
}

function getKeyBoolean(key: string) {
  if (!key) {
    return undefined;
  }
  return key === 'true' ? true : false;
}

function getKeysArray(keys: string) {
  if (!keys) {
    return [];
  }
  return keys.replace(/\s/g, '').split(',');
}

function checkIfExistFilesInRequest(req: uploadRequest) {
  if (!req.files) {
    throw new BadRequest('Nenhum arquivo foi carregado');
  }
}

function getDocumentsFromFiles(files: any): Dfes {
  const documents = new Dfes();
  const xmlFiles = Array.isArray(files) ? files : [files];

  xmlFiles.forEach((file: AttachmentFile) => {
    if (file.mimetype !== 'application/xml') {
      throw new BadRequest(`O arquivo ${file.name} não é um XML válido`);
    }

    const document = XmlParser.toJs(file);

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
