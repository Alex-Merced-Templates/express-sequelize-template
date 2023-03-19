require("dotenv").config()
const express = require("express")
const PORT = process.env.PORT ? process.env.PORT : 4000
const registerMiddleware = require("./middleware")

// define application object
const app = express()

// Register Middleware and Routers
registerMiddleware(app)

// server listener
app.listen(PORT, () => {console.log(`LISTENING ON PORT ${PORT}`)})