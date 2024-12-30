const express = require("express")
const cors = require("cors")

require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>")
})

const port = 3000
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}/`)
})