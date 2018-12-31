const connection = require('./db');
const category = require('./category');

module.exports = {
    async getAllCategories(req, res, next){         //show all categories
        const result = await category.find({})

        if(result) res.json(result)
        else res.status(404).send("not found")
    },

    async setCategory(req, res, next){              //get sportId and add another participant
        const {id = null} = req.params
        const {participant = null} = req.body
            //
        console.log(id)
        console.log(participant)
        const condition = {sportId: id}
        const doc = { 
            $push: {participants: participant}
         }
        const result = await category.updateOne(condition, doc)
        
        if(result) res.json(result)
        else res.status(404).send("not found")
    },

    async getCategoryByNameLocation(req, res, next){    //get name and location and show the relevant categories
        const { first = null } = req.params
        const { last = null } = req.params
        const { location = null } = req.params
        const name = first+' '+last
        console.log(name+' '+ location)

        const result = await category.find({
            participants: name,
            "info.location": location
        })

        if(result) res.json(result)
        else res.status(404).send("not found")
    } 
}