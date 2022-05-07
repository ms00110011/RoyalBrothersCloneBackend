const express = require("express");
const app = express();
const bodyParser = require('body-parser');

var cors = require('cors')

app.use(bodyParser.json([]));

const {bikeController} = require('../Controllers/BikeController');
const { SearchBikeSingle } = require("../Controllers/SearchBikeSingle");
const { SearchBikeLocation } = require("../Controllers/SearchBikeLocation");
const { Signout } = require("../Controllers/Signout");
const { SignUp } = require("../Controllers/SignUp");
const { Login } = require("../Controllers/Login");


app.use(cors())

app.get("/search", bikeController);
app.get("/search/:id", SearchBikeSingle)
app.get("/searchcity/:city", SearchBikeLocation);



app.post('/login',Login);
app.post('/signup',SignUp);
app.put('/signOut',Signout);



module.exports = app;