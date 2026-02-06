const recipes = require('../model/recipeModel')

//get all recipea
exports.getAllRecipesController = async(req,res)=>{
    console.log("Inisde getAllRecipesController");
    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

//view recipe
exports.viewRecipeController = async(req,res)=>{
    console.log("Inisde viewRecipeController");
    const {id} = req.params
    try{
        const viewRecipe = await recipes.findById({_id:id})
        res.status(200).json(viewRecipe)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

//related recipe
exports.relatedRecipeController = async(req,res)=>{
    console.log("Inisde relatedRecipeController");
    const cuisine = req.query.cuisine
    try{
        const allRelatedRecipe = await recipes.find({cuisine})
        res.status(200).json(allRelatedRecipe)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

//add recipea
exports.addRecipeController = async(req,res)=>{
    console.log("Inisde addRecipeController");
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    try{
        const existingRecipe = await recipes.findOne({name})
        if(existingRecipe){
            res.status(409).json("Recipe already exists... Add Another!!!")
        }else{
            const newRecipe = await recipes.create({
                name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
            })
            res.status(200).json(newRecipe)
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

//edit recipea
exports.editRecipeController = async(req,res)=>{
    console.log("Inisde editRecipeController");
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    const {id} = req.params
    try{
        const updateRecipe = await recipes.findByIdAndUpdate({_id:id},{
            name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
        },{new:true})
        res.status(200).json(updateRecipe)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

//remove recipea
exports.removeRecipeController = async(req,res)=>{
    console.log("Inisde removeRecipeController");
    const {id} = req.params
    try{
        const recipeDetails = await recipes.findByIdAndDelete({_id:id})
        res.status(200).json(recipeDetails)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}