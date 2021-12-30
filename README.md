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

Caso não saiba importar arquivos do Insomnia, verifique [aqui](https://docs.insomnia.rest/insomnia/import-export-data) a documentação.

## Observações

Lembrando que o middleware de usuário não foi implementado com JWT, foi apenas para testes, e o mini CRUD no controller de usuário, tem operações simples, somente para exemplo do padrão de funções nos controllers.


## Estrutura de pastas

A estrutura de pastas é a seguinte

```
  src/
  app/
    controllers/
    middlewares/
    models/
    views/
  assets/
  configs/
  database/
    schemas/
  utils/
```

## Nomes de arquivos

Em configs, nomeio os arquivos de acordo com o que aquela configuração vai ser responsável, por exemplo -> server.js : configurações do server principal, como porta, ambiente, etc. nomeBanco.js -> aqui coloco o nome do banco, nelas serão as configurações de autenticação com o banco de dados e configurações adicinais do banco de dados.
Os controllers, nomeio com NomeController.js exemplo -> UserController.js.
Nos middlewares, uso apenas nome.js -> auth.js nos Models a mesma coisa.


## Explicações do padrão

O arquivo src/server.js gosto de criar separado por questão de organização e para conseguir isolar para uso em ambientes de testes e de produção.

Em controllers, uso em formato de classes, com apenas 5 métodos, dessa forma:

```js
class NameController {
  /*
    O método index, é uma listagem, usado para buscar todos os registros de algo, a rota é do tipo GET e nomeada com /nome. Onde esse nome representa o que a rota vai listar, como no exemplo foi usado /users
  */
  async index(req, res) {
  }

  /*
    A rota show, é usado para buscar um registro específico, também é com o método GET, e seu formato é /nome/:campo, como no exemplo foi usado /users/:id onde o id é o campo pelo qual foi usado a busca específica.
  */
  async show(req, res) {
  }

  /*
  O método store, é usado para a criação de algo, como no exemplo era criado os usuários, é usado com o método HTTP do tipo POST, no formato /nome, no exemplo foi usado /users onde os campos são passados via body
  */
  async store(req, res) {
  }

  /*
  O método update, é usado para a atualização de um dado, como o próprio nome sugere, é usado com o método HTTP do tipo PUT, no formato /nome/:campo, no exemplo foi usado /users/:id
  */
  async update(req, res) {
  }

  /*
  O método delete, é usado para a deletar algo, é usado com o método HTTP do tipo DELETE, no formato /nome/:campo, no exemplo foi usado /users/:id
  */
  async delete(req, res) {
  }
}

//É exportado uma instância da classe, para ser usado os métodos nas rotas do projeto.
module.exports = new UserController();
```
No arquivo server.js, uso um método chamado security

```js
security() {
    this.server.use((req, res, next) => {
      res.setHeader('X-Powered-By', 'PHP/7.4.1');
      return next();
    });
  }
```

Esse método, é um middleware que serve para maquiar a origem do seu código, informando que foi usado com PHP na versão 7.4.1.


No arquivo de rotas, usei o middleware de auth dessa forma:

```js
routes.use(auth);
```
Dessa forma, todas as rotas abaixo dessa linha, irão passar por esse middleware, para deixar apenas algumas rotas com o middleware, você pode usar a seguinte forma:

```js
// routes.<<metodo>>('/<<nome da rota>>', <<nome do middleware>>, <<Controller.metodo>>);

//No exemplo, podíamos usar:

routes.get('/users/:id', auth, UserController.show);
```
