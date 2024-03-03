const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const RecipeUserModel = require('./models/RecipeUser')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/recipeUser");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    RecipeUserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The password is incorrect")
                }

            } else {
                res.json("No record existed")
            }
        })
})

app.post('/register', (req, res) => {
    RecipeUserModel.create(req.body)
        .then(recipeusers => res.json(recipeusers))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
}
)