# VUTTR-Vue

Desafio front-end bossabox de construir uma aplicação simples para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags. Que deverá ser construído utilizando qualquer framework JavaScript de sua preferência, no meu caso [Vuejs](https://github.com/vuejs).

## :book: Sumário

* [Dependências](https://github.com/gabrielsouzadev/vuttr-vue#gear-depend%C3%AAncias)
* [Guia de instalação](https://github.com/gabrielsouzadev/vuttr-vue#rocket-guia-de-instala%C3%A7%C3%A3o)
  * [Como instalar](https://github.com/gabrielsouzadev/vuttr-vue#como-instalar)
  * [Executando a aplicação](https://github.com/gabrielsouzadev/vuttr-vue#executando-a-aplica%C3%A7%C3%A3o)
* [Funcionalidades](https://github.com/gabrielsouzadev/vuttr-vue#bulb-funcionalidades)
* [Conteinerização (Docker)](https://github.com/gabrielsouzadev/vuttr-vue#dolphin-conteineriza%C3%A7%C3%A3o-docker)
  * [Comandos Docker](https://github.com/gabrielsouzadev/vuttr-vue#comandos-docker)
* Porque o uso do Vuejs

## :gear: Dependências

* [Node](https://nodejs.org/en/) (10.13.0 ou maior)
* [Yarn](https://yarnpkg.com/pt-BR/) ou [NPM](https://www.npmjs.com/)

## :rocket: Guia de instalação

Partindo do principio que você já tenha instalado as dependências necessárias e também que possua rodando a [fake-api](https://gitlab.com/bossabox/challenge-fake-api/tree/master) fornecida pela [BossaBox](https://bossabox.com/). Neste tutorial daremos preferência ao uso do yarn para instalar a aplicação.

### Como instalar

Clone este repositório:
```
git clone https://github.com/gabrielsouzadev/vuttr-vue.git
```

Entre na pasta e instale as dependências:
```
cd vuttr-vue && yarn install
```

### Executando a aplicação

Iniciar a aplicação em modo de desenvolvimento:
```
yarn run serve
```

Compilar e minificar para produção:
```
yarn run build
```

Fazer a varredura do Lint nos arquivos:
```
yarn run lint
```

Realizar os testes unitários:
```
yarn run test:unit
```

## :bulb: Funcionalidades

Filtrar ferramentas pelo título

![Filtros](https://i.imgur.com/tN14ZEp.gif)

Filtrar ferramentas por tags

![Filtros](https://i.imgur.com/2FYIPD5.gif)

Adicionar uma nova ferramenta

Deletar uma ferramenta existente

![Deletar](https://i.imgur.com/ryogLT7.gif)

## :whale2: Conteinerização (Docker)

O container foi criado a partir de uma imagem node (9.11.1), então instalei o http-server global pelo yarn para executar todo static content da aplicação após foi feita a instalação das dependências do projeto, então executado os comandos de compilar e minificar para produção.

```
FROM node:9.11.1-alpine

RUN yarn global add http-server

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 8080

CMD [ "http-server", "dist" ]
```

### Comandos Docker

Compilar a imagem

```
docker build -t dockeruser/appname .
```

Executar a imagem (A aplicação estará acessível em localhost:8080)

```
docker run -it -p 8080:8080 --rm --name containername dockeruser/appname
```
