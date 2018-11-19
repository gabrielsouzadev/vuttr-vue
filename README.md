# VUTTR-Vue

Desafio front-end bossabox de construir uma aplicação simples para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

## :book: Sumário

* Dependências
* Guia de instalação
  * Como instalar
  * Executando a aplicação
* Funcionalidades
* Conteinerização (Docker)
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

![Adicionar]()

Deletar uma ferramenta existente

![Deletar](https://i.imgur.com/ryogLT7.gif)
