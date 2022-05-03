

const mongoose = require("mongoose");

class mongo {
  constructor() {
    this.createMongoConnection();
  }

  createMongoConnection() {
    mongoose.connect(
      `mongodb+srv://frank-castle:heythere@RoyalBrothersClone.6soas.mongodb.net/RoyalBrothers?retryWrites=true&w=majority`
    );

    mongoose.connection.once("open", () => {
      console.log("Connection established successfully DB");
    });

    mongoose.connection.on("error", () => {
      console.log("Error occoured");
    });
  }
}

module.exports = mongo;
