const express = require("express")

const authRouter = express.Router()

authRouter.post("/sign-up", (req, res) => {
    res.json({ message: "You have hit the user registration page" })
})

module.exports = authRouter