const { Router } = require('express');
const UserController = require('./app/controllers/UserController');
const auth = require('./app/middlewares/auth');

const routes = Router();

routes.get('/', (req, res) => res.json({
  server: 'Standard Node Structure',
  status: 'running',
}));

routes.get('/users', UserController.index);

routes.use(auth);
// protected routes
routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

module.exports = routes;
