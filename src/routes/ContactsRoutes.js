const express = require('express');
const contactsController = require('../app/controllers/ContactController');

const contactsRoutes = express.Router();

contactsRoutes.get('/contacts', contactsController.index);
contactsRoutes.get('/contacts/:id', contactsController.show);
contactsRoutes.delete('/contacts/:id', contactsController.delete);
contactsRoutes.post('/contacts', contactsController.store);
contactsRoutes.put('/contacts/:id', contactsController.update);

module.exports = contactsRoutes;
