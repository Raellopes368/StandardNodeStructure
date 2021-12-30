const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class Server {
  constructor() {
    this.server = express();
    this.security();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }

  security() {
    this.server.use((req, res, next) => {
      res.setHeader('X-Powered-By', 'PHP/7.4.1');
      return next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new Server().server;
