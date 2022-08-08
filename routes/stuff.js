const express = require('express');
const stuffThing = require('../controllers/stuff');
const auth = require('../middleware/auth');

const route = express.Router();




route.post( '/', auth ,stuffThing.createThing )  
route.get('/:id',auth ,stuffThing.findOneThing);   
route.get('/', auth ,stuffThing.findThing);   
route.put('/:id',auth , stuffThing.updateOneThing);   
route.delete('/:id',auth , stuffThing.deleteThing); 


module.exports = route ;