const express = require('express');
const { createThing, findThing, updateOneThing, deleteThing } = require('../controllers/stuff');
const route = express.Router();
const stuffThing = require('../controllers/stuff');



route.post( '/', stuffThing.createThing )  
route.get('/:id',stuffThing.findOneThing);   
route.get('/', stuffThing.findThing);   
route.put('/:id', stuffThing.updateOneThing);   
route.delete('/:id', stuffThing.deleteThing); 


module.exports = route ;