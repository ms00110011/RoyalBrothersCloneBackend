
const tokenModel = require('../Model/token')


async function Signout(req, res, next) {
    //remove token from DB
    const token = req.body.token;
    await tokenModel.deleteOne({ token });
    res.status(200).json({ status: "Success", message: "Token deleted successfully" });
}



module.exports = {
    Signout
}