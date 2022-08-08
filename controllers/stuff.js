const Thing = require('../models/thing') ;
const express = require('express')

exports.createThing = (req,res,next) => {
    delete req.body._id ;
    const thing = new Thing({
      ...req.body
    });
    thing.save()
      .then( () => res.status(201).json({message : 'eregistrement validé'}))
      .catch( (error) => res.status(400).json({error}) ) 
  };

exports.findOneThing = (req,res,next) => {
    Thing.findOne({_id: req.params.id})
     .then(things => res.status(200).json(things))
     .catch(error => res.status(400).json({error}))
   };

exports.findThing = (req,res,next) => {
    Thing.find()
     .then(things => res.status(200).json(things))
     .catch(error => res.status(400).json({error}))
   };

exports.updateOneThing = (req,res,next) => {
    Thing.updateOne({_id: req.params.id},{...req.body , _id:req.params.id})
     .then(things => res.status(200).json({message : 'objet bien modifié'}))
     .catch(error => res.status(400).json({error}))
  };


exports.deleteThing = (req,res,next) => {
    Thing.deleteOne({_id: req.params.id})
     .then(things => res.status(200).json({message : 'objet bien supprimé'}))
     .catch(error => res.status(400).json({error}))
   } ;

