const express = require('express')
const recipeController = require('./controller/recipeController')
const userController = require('./controller/userController')
const jwtMiddleware = require('./middlewares/jwtMiddleware')

const router = new express.Router()

// routes
router.get('/recipes',recipeController.getAllRecipesController)
//register
router.post('/register',userController.registerController)
//login
router.post('/login',userController.loginController)

//----------------------AUTHORISED USER-----------------------------------
// view recipe
router.get('/recipes/:id',jwtMiddleware,recipeController.viewRecipeController)
// related recipe
router.get('/recipes-related',jwtMiddleware,recipeController.relatedRecipeController)

module.exports = router
