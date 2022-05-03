const mongoose = require("mongoose");

const bikeModel = new mongoose.Schema({
  name: { type: String, required: true },
  priceHour: { type: Number, required: true },
  img: { type: String, required: true },
  city: { type: String, required: true },
  area: { type: String, required: true },
  exkm: { type: Number, required: true },
  kmLimit: { type: Number, required: true }
});

module.exports = mongoose.model("bikeModel",bikeModel,"Bikes");


