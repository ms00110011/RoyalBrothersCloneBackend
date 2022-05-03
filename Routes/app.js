const express = require("express");
const app = express();
var cors = require('cors')

const {bikeController} = require('../Controllers/BikeController');
const { SearchBikeSingle } = require("../Controllers/SearchBikeSingle");


app.use(cors())

app.get("/", bikeController);
app.get("/:id", SearchBikeSingle)


module.exports = app;