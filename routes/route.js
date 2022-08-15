const express = require('express')
const  route  = express.Router(); 
const Control = require('../controllers/controllers')

route.get('/', Control.products );
route.get('/:id',Control.productsOne );
route.post('/',Control.createProducts);
route.put('/:id', Control.updateProducts );
route.delete('/:id',Control.deleteProducts );

module.exports = route;