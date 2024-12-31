const express = require("express")
const cors = require("cors")

const authRouter = require("./routes/user.routes.js")

require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRouter)

const port = 3000
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}/`)
})