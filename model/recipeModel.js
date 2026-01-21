const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        reqred:true
    },
    ingredients:{
        type:Array,
        reqred:true
    },
    instructions:{
        type:Array,
        reqred:true
    },
    prepTimeMinutes:{
        type:Number,
        reqred:true
    },
    cookTimeMinutes:{
        type:Number,
        reqred:true
    },
    servings:{
        type:Number,
        reqred:true
    },
    difficulty:{
        type:String,
        reqred:true
    },
    cuisine:{
        type:String,
        reqred:true
    },
    caloriesPerServing:{
        type:Number,
        reqred:true
    },
    image:{
        type:String,
        reqred:true
    },
    mealType:{
        type:Array,
        reqred:true
    }
})

const recipes = mongoose.model("recipes",recipeSchema)
module.exports = recipes