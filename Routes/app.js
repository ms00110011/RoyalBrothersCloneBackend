const express = require("express");
const app = express();
const bodyParser = require('body-parser');

var cors = require('cors')

app.use(bodyParser.json([]));

const {bikeController} = require('../Controllers/BikeController');
const { SearchBikeSingle } = require("../Controllers/SearchBikeSingle");
const { SearchBikeLocation, SearchBikeLocationASC, SearchBikeLocationDSC } = require("../Controllers/SearchBikeLocation");
const { Signout } = require("../Controllers/Signout");
const { SignUp } = require("../Controllers/SignUp");
const { Login } = require("../Controllers/Login");
const TokenUser = require("../Controllers/TokenUser");
const dataExt = require("../midddleware/dataExt");
const { videoJWT } = require("../Controllers/VideoJWT");



app.use(cors())
app.get('/',bikeController)
app.get("/search", bikeController);
app.get("/search/:id", SearchBikeSingle)
app.get("/searchcity/:city", SearchBikeLocation);
app.get("/searchcityASC/:city", SearchBikeLocationASC);
app.get("/searchcityDSC/:city", SearchBikeLocationDSC);



app.post('/videojwt',videoJWT)


app.post('/login',Login);
app.post('/signup',SignUp);
app.put('/signOut',Signout);

app.post('/tokenUser',TokenUser, dataExt)



module.exports = app;