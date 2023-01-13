

const mongoose = require("mongoose");

class mongo {
  constructor() {
    this.createMongoConnection();
  }

  createMongoConnection() {
    mongoose.connect(
      `mongodb+srv://frank-castle:heythere@royalbrothersclone.6soas.mongodb.net/RoyalBrothersClone?retryWrites=true&w=majority`
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
