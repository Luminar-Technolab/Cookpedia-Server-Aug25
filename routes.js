const express = require('express')
const recipeController = require('./controller/recipeController')
const userController = require('./controller/userController')
const jwtMiddleware = require('./middlewares/jwtMiddleware')
const downloadController = require('./controller/downloadController')
const saveRecipeController = require('./controller/saveRecipeController')

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
// download recipe
router.post('/downloads/:id',jwtMiddleware,downloadController.addToDownloadController)
// save recipe
router.post('/save-recipe/:id',jwtMiddleware,saveRecipeController.saveRecipeToCollectionController)
// get save recipe
router.get('/save-recipes',jwtMiddleware,saveRecipeController.getUserSavedCollectionController)
// remove save recipe
router.delete('/save-recipes/:id',jwtMiddleware,saveRecipeController.removeUserSavedItemController)

module.exports = router
