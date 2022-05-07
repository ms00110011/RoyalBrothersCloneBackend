const tokenModel = require("../Model/token");
const userModel = require("../Model/User");

async function TokenUser(req, res, next) {
//   console.log(req.body.token);
  //Validate email and password
  const response = await tokenModel.findOne({ token: req.body.token });
  next()
}


module.exports = TokenUser;
