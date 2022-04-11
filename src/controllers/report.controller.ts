import {
  Body,
  Controller,
  Header,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ParseJsCsvService } from 'src/services/parse-js-csv.service';
import { ParseXmlJsService } from 'src/services/parse-xml-js.service';
import { ReportOptionsDto } from 'src/shared/dtos/report-options.dto';

@ApiTags('report')
@Controller('report')
export class ReportController {
  constructor(
    private readonly convertXmlToJsService: ParseXmlJsService,
    private readonly parseJsCsvService: ParseJsCsvService,
  ) {}

  @Post('js')
  @Header('Content-Disposition', 'attachment; filename=report.json')
  @Header('Content-Type', 'application/json')
  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description: 'Um ou mais arquivos XML a serem convertidos',
        },
      },
    },
  })
  createJs(@UploadedFiles() files: Array<Express.Multer.File>) {
    return this.convertXmlToJsService.execute(files);
  }

  @Post('csv')
  @Header('Content-Disposition', 'attachment; filename=report.csv')
  @Header('Content-Type', 'text/csv')
  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        keys: {
          type: 'string',
          description:
            ' Array separado por vingulas de campos a serem gerados no relatório',
        },
        fieldDelimiter: {
          type: 'string',
          description: 'Define qual o delimitador utilizado no CSV',
        },
        totalizerRow: {
          type: 'boolean',
          description:
            ' Define se o relatório deve possuir um linha de valores totalizadores',
        },
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description: 'Um ou mais arquivos XML a serem convertidos',
        },
      },
    },
  })
  createCsv(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() reportOptions: ReportOptionsDto,
  ) {
    const reportJsDtos = this.convertXmlToJsService.execute(files);
    return this.parseJsCsvService.execute(reportJsDtos, reportOptions);
  }
}
