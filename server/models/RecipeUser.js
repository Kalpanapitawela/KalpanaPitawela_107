const mongoose = require('mongoose')

const RecipeUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const RecipeUserModel = mongoose.model("recipeUser", RecipeUserSchema)
module.exports = RecipeUserModel