"use strict"

const express = require("express")
const app = express()

const home = require("./routes/home")

app.set("views", "./views")
app.set("view engine", "pug")

app.use("/",home)

module.exports = app