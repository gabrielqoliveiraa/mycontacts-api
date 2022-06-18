const express = require('express');
const categoryRoutes = require('../app/controllers/CategoryController');

const categoriesRoutes = express.Router();

categoriesRoutes.get('/categories', categoryRoutes.index);
categoriesRoutes.get('/categories/:id', categoryRoutes.show);
categoriesRoutes.delete('/categories/:id', categoryRoutes.delete);
categoriesRoutes.post('/categories', categoryRoutes.store);
categoriesRoutes.put('/categories/:id', categoryRoutes.update);

module.exports = categoriesRoutes;
