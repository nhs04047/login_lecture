"use strict"

const express = require("express")
const app = express()

const home = require("./src/publice/js/home")

app.set("views", "./src/views")
app.set("view engine", "pug")
app.use(express.static(`${__dirname}/src/public`))

app.use("/",home)

module.exports = app