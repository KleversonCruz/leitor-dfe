import {
  Controller,
  Get,
  Render,
  Header,
  Res,
  Post,
  UseInterceptors,
  UploadedFiles,
  Req,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ParseJsCsvService } from 'src/services/parse-js-csv.service';
import { ParseXmlJsService } from 'src/services/parse-xml-js.service';
import { ReportJsDto } from 'src/shared/dtos/report-js.dto';
import getTotalValue from 'src/shared/utils/getTotalValue';
import { Response } from 'express';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller('/')
@ApiExcludeController()
export class WebController {
  constructor(
    private readonly convertXmlToJsService: ParseXmlJsService,
    private readonly parseJsCsvService: ParseJsCsvService,
  ) {}

  @Get()
  @Render('report')
  index() {
    return {};
  }

  @Get('/download')
  @Header('Content-Disposition', 'attachment; filename=relatorio.csv')
  @Header('Content-Type', 'text/csv')
  download(@Res() res: Response, @Req() req) {
    res.end(req.session.download);
  }

  @Post()
  @Render('report')
  @UseInterceptors(FilesInterceptor('files'))
  async create(@UploadedFiles() files: Array<Express.Multer.File>, @Req() req) {
    let convertedXml: ReportJsDto[] = [];
    let totalValue: number;

    try {
      convertedXml = this.convertXmlToJsService.execute(files);
      const csv = await this.parseJsCsvService.execute(convertedXml, {});
      totalValue = getTotalValue(convertedXml);

      req.session.download = csv;
    } catch (error) {
      req.flash('error', error.message);
    } finally {
      return {
        convertedXml: convertedXml,
        totalValue: totalValue,
        error: req.flash('error'),
      };
    }
  }
}
