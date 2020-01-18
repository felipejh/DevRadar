const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Tipos de parâmetros
// Query params: são incorporados na url -> req.query (Filtros, ordenação. GET)
// Route params: req.params (Identificar um recurso na alteração ou remoção. PUT e DELETE)
// Body: req.body (Dados para criação ou alteração de un registro. Formato JSON (POST, PUT))

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;