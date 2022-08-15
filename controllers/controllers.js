const app = require('../app');
const thing = require('../models/models');

// Retournera tous les produits sous la forme{ products: Product[] }

exports.products =(req,res) => {
    thing.find()
    .then( (thing) => res.status(200).json(thing))
    .catch( (error) => res.status(400).json({error}) )
};

//Retournera le produit avec le_id fourni sous la forme { product: Product }

exports.productsOne = (req ,res) => {
    thing.findOne({_id: req.body.id})
    .then( (thing) => res.status(200).json(thing))
    .catch( (error) => res.status(400).json({error}) )
}

//Créera un nouveau Product dans la base de données

exports.createProducts = (req,res) =>{
    delete req.body._id;
    const Thing = new thing({
        ...req.body
    })
    Thing.save()
    .then( (thing) => res.status(200).json(thing))
    .catch( (error) => res.status(400).json({error}) )
}

//Modifiera le produit avec le _id fourni selon les données envoyées dans le corps de la requête.

exports.updateProducts = (req,res) => {
    delete req.body._id;
    const Thing = new thing({
       ...req.body
        })
    Thing.updateOne({_id : req.body.id })
    .then( (thing) => res.status(200).json(thing))
    .catch( (error) => res.status(400).json({error}) )

}

//Supprimera le produit avec le _id fourni.

exports.deleteProducts = (req,res) =>{
    thing.delete({id : req.body.id})
    .then( () => res.status(200).json({message:"delete"}))
    .catch( (error) => res.status(400).json({error}) )
}