import { ApiProperty } from '@nestjs/swagger';
import { IsBooleanString, IsNotEmpty, IsOptional } from 'class-validator';

export class ReportOptionsDto {
  @ApiProperty()
  @IsNotEmpty({ message: `$property não deve ser vazio` })
  @IsOptional()
  keys?: string;

  @ApiProperty()
  @IsNotEmpty({ message: `$property não deve ser vazio` })
  @IsOptional()
  fieldDelimiter?: string;

  @ApiProperty()
  @IsOptional()
  @IsBooleanString({ message: `$property deve possuir valor 'true' ou 'false` })
  totalizerRow?: string;
}
