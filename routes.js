const express = require('express')
const recipeController = require('./controller/recipeController')
const userController = require('./controller/userController')

const router = new express.Router()

// routes
router.get('/recipes',recipeController.getAllRecipesController)
//register
router.post('/register',userController.registerController)
//login
router.post('/login',userController.loginController)
// view recipe
router.get('/recipes/:id',recipeController.viewRecipeController)

module.exports = router