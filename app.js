const express = require('express');
const mongoose = require('mongoose');
const Thing = require('./models/thing');
const route = require('./routes/stuff');



mongoose.connect('mongodb+srv://open-pro:open-pro@cluster0.qfbx2.mongodb.net/?retryWrites=true&w=majority' ,
  { useNewUrlParser : true ,
   useUnifiedTopology : true})
   .then( () => console.log('connexion réussie'))
   .catch( () =>console.log('connexion échouée') );

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());
app.use('/api/stuff' , route) ;

  module.exports = app;