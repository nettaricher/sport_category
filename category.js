const mongoose = require('mongoose')

const cat_schema = {                   //the embedded schema
        location: {type: String},
        startDate: {type: String},
        endDate: {type: String}
    }
const embedded = new mongoose.Schema(cat_schema)

const schema = {                       //the document schema
    sportName: {type: String, require: true},
    sportId:{type: Number, require: true},
    participants: [String],
    info: [embedded]
}

const category_schema = new mongoose.Schema(schema)
const Category = mongoose.model('Category', category_schema)

module.exports = Category