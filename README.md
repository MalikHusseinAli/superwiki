# Projeto didático SUPERWIKI

## Author: Ed de Almeida (edvaldoajunior@gmail.com)

Este projeto é um exemplo de como podemos usar o NodeJS em conjunto com o ReactJS. 

A base dele é uma aplicação NodeJS, mas no diretório **client/** desta aplicação nós temos uma aplicação ReactJS criada com Vite. O arquivo de configuração do Vite (vite.config.ts) foi modificado para que gere os seus resultados do siretório **public/** da aplicação NodeJS, que está sendo servido como base dos arquivos estáticos pela aplicação NodeJS.

Dessa forma o NodeJS pode servir API e páginas ao mesmo tempo. Basta que as rotas de API sejam prefixadas com **/api/**, enquanto a SPA (Single Page Application) roda a partir de **public/**, sem qualquer prefixo.

Arquivos compactados com esse boilerplate inicial podem ser encontrados em:

- Formato ZIP: 
- Formato tar.gz: 

