# Relatórios para documentos físcais eletrônicos

## Descrição do projeto

<p align="justify"> 
API REST desenvolvida para uso em revenda de softwares de automação comercial, onde há necessídade do envio dos arquivos XML de documentos físcais junto a uma relatório para escritórios de contabilidade.
    
Este projeto realiza a leitura de XMLs de documentos físcais e converte para um arquivo CSV. É possível gerar relatórios com diferentes modelos de documentos(NFC-e, NF-e, CF-e SAT) em um único arquivo.
</p>

## Funcionalidades

:heavy_check_mark: Relatórios em CSV a partir de Documentos Fiscais Eletrônicos.

:heavy_check_mark: Compatível com XMLs de NF-e, CF-e SAT e NFC-e.

:heavy_check_mark: Personalizar campos e delimitadores do arquivo CSV.

## Instalando e executando o projeto

```bash
npm install
```

```bash
npm run dev
```
Realize as requisições em [http://localhost:3000](http://localhost:3000) para obter o resultado.

## REST API

### Request

`POST /report/`

    curl --location --request POST 'localhost:3000/report' \--form 'xml=@""'

### Response

    Headers:
    Status: 200 OK
    Date: TWed, 16 Mar 2022 21:44:20 GMT
    Content-Disposition: attachment; filename="report.csv"
    Connection: keep-alive
    Content-Type: text/csv
    
    Body:
    emitCNPJ,emitNome,emitMun...
    11.111.111/1111-11,EMITENTE TESTE,SAO PAULO...

### Paramêtros

* `xml` - Um ou mais arquivos XML a serem convertidos para CSV.
* `keys` - (Opcional) Array separado por vingulas de campos a serem gerados no relatório.
    * `emitCNPJ, emitNome, ...`
* `excludeKeys` - (Opcional) Array separado por vingulas de campos que não serão gerados no relatório
    * `emitCNPJ, emitNome, ...`
* `fieldDelimiter` - (Opcional) Define qual o delimitador utilizado no CSV
    * default: `,`
* `unwindArrays` - (Opcional) Boolean - Define se deve ser gerado com multiplas linhas para arrays de items nos documentos
    * default: `false`
* `includeTotalizerRow` - (Opcional) Boolean - Define se o relatório deve possuir um linha de valores totalizadores
    * default: `false`


