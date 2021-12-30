# Standard Node Structure

## Descrição
Base de um projeto padrão Node Js com Express Js.

## Requisitos

Para esse projeto, você precisa ter instalado em sua máquina
o **Node**, [acesse aqui para documentação](https://nodejs.org/en/download/), o **Npm** ou outor gerenciador de pacotes como o **Yarn**, [para instalar o yarn acesse aqui](https://classic.yarnpkg.com/lang/en/docs/install/).

## Instalação

Faça o clone do projeto com:

```
git clone https://github.com/Raellopes368/StandardNodeStructure.git
```
Após isso, acesse a pasta que foi gerada e instale as dependências do projeto:

```bash
npm install
#ou
yarn
```


## Configuração

Crie um arquivo chamado .env na raiz do projeto, e configure uma porta para comunicação do Node, conforme exemplificado em .env.example

## Execução

Você pode inicializar o projeto com:

```bash
npm run dev
#ou
yarn dev
```
`Para o modo de desenvolvimento, instale o nodemon como dependência global.`


## Rotas

Esse projeto, tem todas as rotas principais de exemplo, como GET, PUT, POST e DELETE, para entender melhor, acesse [aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods) a documentação do Mozilla.

Para acessar as rotas que não são Gets, use uma ferramenta que possibilite o envio de requisições HTTPs, como o [Insomnia](https://insomnia.rest/download) ou o [Postman](https://www.postman.com/).

Deixei [aqui](./src/assets/insomniaEnviroment.json) as configurações do Insomnia que usei, baixe em sua máquina e importe dentro do seu Insomnia para usar as configurações que deixei.

## Observações

Lembrando que o middleware de usuário não foi implementado com JWT, foi apenas para testes, e o mini CRUD no controller de usuário, tem operações simples, somente para exemplo do padrão de funções nos controllers.
