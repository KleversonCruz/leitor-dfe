# Leitor de Documentos Fiscais Eletrônicos
![Badge Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)
![Badge NodeJs](http://img.shields.io/static/v1?label=NodeJS&message=16.14.0&color=GREEN&style=for-the-badge)
![Badge NestJS](http://img.shields.io/static/v1?label=NestJS&message=8.2.4&color=red&style=for-the-badge)

<p align="justify"> 
API REST desenvolvida para uso em revenda de softwares de automação comercial, onde havia necessidade do envio dos arquivos XML de documentos fiscais junto a um relatório para escritórios de contabilidade.
    
Este projeto realiza a leitura de XMLs de documentos fiscais e converte para um arquivo CSV. É possível gerar relatórios com diferentes modelos de documentos(NFC-e, NF-e, CF-e SAT) em um único arquivo.
</p>

## Funcionalidades

:heavy_check_mark: Relatórios em CSV a partir de Documentos Fiscais Eletrônicos.

:heavy_check_mark: Compatível com XMLs de NF-e, CF-e SAT e NFC-e.

:heavy_check_mark: Personalizar campos e delimitadores do arquivo CSV.

## Instalando

```bash
$ npm install
```

## Executando

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testando

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## REST API
`POST /report/csv`

### Request
```bash
curl -X 'POST'
  'https://dfe-reader-nodejs.herokuapp.com/report/csv'
  -H 'Content-Type: multipart/form-data'
  -F 'keys=emitCNPJ,status,dtEmissao,itemVTotal'
  -F 'fieldDelimiter=;'
  -F 'totalizerRow=true'
  -F 'files=@NFCe.xml;type=text/xml'
```

### Responses
    Code 201
    
    Response headers:
     content-disposition: attachment; filename=report.csv 
     content-length: 142 
     content-type: text/csv; charset=utf-8 
    
    Response body:
      emitCNPJ;status;dtEmissao;itemVTotal
      11.111.111/1111-11;AUTORIZADO;03/05/2021;25,16
      11.111.111/1111-11;AUTORIZADO;03/05/2021;16,29
      ;;;41,45
      
A documentação completa pode ser acessada em [Swagger UI](https://dfe-reader-nodejs.herokuapp.com/api)

### Paramêtros

* `files` - Um ou mais arquivos XML a serem convertidos
* `keys` - (Opcional) Array separado por vingulas de campos a serem gerados no relatório
* `fieldDelimiter` - (Opcional) Define qual o delimitador utilizado no CSV
* `includeTotalizerRow` - (Opcional) Boolean - Define se o relatório deve possuir um linha de valores totalizadores
