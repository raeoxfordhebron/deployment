require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4321
const DATABASE_URL = process.env.DATABASE_URL


app.get("/", (req, res) => {
    res.send(`${PORT}`)
})

app.get("/dburl", (req, res) => {
    res.send(`${DATABASE_URL}`)
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})