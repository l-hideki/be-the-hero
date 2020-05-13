const express = require('express');
const connection = require('./database/connection');
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentsController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');
const routes = express.Router();


routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents',incidentsController.index);
routes.post('/incidents',incidentsController.create);
routes.delete('/incidents/:id',incidentsController.delete);

routes.get('/profile',profileController.index);

routes.post('/session',sessionController.create);


module.exports = routes;