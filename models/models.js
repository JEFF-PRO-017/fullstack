const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:{type : String},
    description:{type : String},
    price: {type : Number},
    inStock: {type : Boolean}
})

module.exports = mongoose.model('thing',schema);