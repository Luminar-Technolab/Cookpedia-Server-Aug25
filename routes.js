const express = require('express')
const recipeController = require('./controller/recipeController')
const userController = require('./controller/userController')

const router = new express.Router()

// routes
router.get('/recipes',recipeController.getAllRecipesController)
//register
router.post('/register',userController.registerController)

module.exports = router