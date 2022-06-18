const express = require('express');
const categoriesRoutes = require('./routes/CategoryRoutes');
const contactsRoutes = require('./routes/ContactsRoutes');

const routes = express.Router();

routes.use(contactsRoutes);
routes.use(categoriesRoutes);

module.exports = routes;
