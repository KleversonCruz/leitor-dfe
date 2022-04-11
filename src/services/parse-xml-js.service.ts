import { BadRequestException, Injectable } from '@nestjs/common';
import { Service } from 'src/core/base/service';
import { CfeMapper } from 'src/core/domain/mappers/cfe.mapper';
import { NfeMapper } from 'src/core/domain/mappers/nfe.mapper';
import { ReportJsDto } from 'src/shared/dtos/report-js.dto';
import { xml2js } from 'xml-js';

const options = {
  compact: true,
  elementNameFn: formatElementName,
  attributeNameFn: function (val: string) {
    return val.toLowerCase();
  },
  textFn: removeJsonTextAttribute,
};

function removeJsonTextAttribute(val: string, parentElement: any) {
  try {
    const keyNo = Object.keys(parentElement._parent).length;
    const keyName = Object.keys(parentElement._parent)[keyNo - 1];

    parentElement._parent[keyName] = val;
  } catch (e) {}
}

function formatElementName(val: string) {
  return val.replace(/^(ICMS|ICMSSN)\d+$/gi, '$1').toLowerCase();
}

const validTypes = ['application/xml', 'text/xml'];

@Injectable()
export class ParseXmlJsService implements Service<ReportJsDto[]> {
  private cfeMapper: CfeMapper;
  private nfeMapper: NfeMapper;

  constructor() {
    this.cfeMapper = new CfeMapper();
    this.nfeMapper = new NfeMapper();
  }

  execute(files: Array<Express.Multer.File>): ReportJsDto[] {
    const dfeReportDtos: ReportJsDto[] = [];

    files?.forEach((file) => {
      if (!validTypes.includes(file.mimetype)) {
        throw new BadRequestException(
          `O arquivo ${file.originalname} não é um XML válido`,
        );
      }

      const json: any = xml2js(file.buffer.toString(), options);

      //CFe
      if (json.cfe) {
        dfeReportDtos.push(this.cfeMapper.mapTo(json.cfe.infcfe));
      } else if (json.cfecanc) {
        dfeReportDtos.push(this.cfeMapper.mapTo(json.cfecanc.infcfe));
      }

      //NFe
      else if (json.nfeproc) {
        dfeReportDtos.push(this.nfeMapper.mapTo(json.nfeproc.nfe.infnfe));
      } else if (json.nfe) {
        dfeReportDtos.push(this.nfeMapper.mapTo(json.nfe.infnfe));
      }

      //Not valid
      else {
        throw new BadRequestException(
          `O arquivo ${file.originalname} não é um XML válido`,
        );
      }
    });

    return dfeReportDtos;
  }
}
