const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("./services/passport")

const app = express()
app.use(bodyParser.json())
require("./routes/authRoutes")(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log("Server is running on", PORT))
