
const mongoose = require('mongoose');

const user = new mongoose.Schema({
    "name": { type: String, required: true },
    "email": { type: String },
    "mobile": { type: Number, required: true },
    "password": { type: String, required: true },
});

module.exports = mongoose.model('user', user);