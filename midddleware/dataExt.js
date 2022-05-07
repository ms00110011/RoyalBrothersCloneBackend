const tokenModel = require("../Model/token");
const userModel = require("../Model/User");

async function dataExt(req, res, next) {
  console.log(req.body.userId);

  const userTAT = await userModel.findOne({ userId:req.body.userId });

  res.send(userTAT)
  
}

module.exports = dataExt