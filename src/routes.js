const express = require('express');
const contactsController = require('./app/controllers/ContactController');

const routes = express.Router();

routes.get('/contacts', contactsController.index);
routes.get('/contacts/:id', contactsController.show);
routes.delete('/contacts/:id', contactsController.delete);
routes.post('/contacts', contactsController.store);
routes.put('/contacts/:id', contactsController.store);

module.exports = routes;
