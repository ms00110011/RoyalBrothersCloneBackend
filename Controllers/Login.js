const userModel = require('../Model/User');
const JWTService = require('../CommonLib/JWTtoken');
const encryptDecrypt = require('../CommonLib/Encrypt-Decrypt');
const tokenModel = require('../Model/token');
const EmailService = require("../Notification/EmailService");



async function Login(req, res, next) {

    //Validate email and password
    const userDetail = await userModel.findOne({ mobile: req.body.mobile });
    const isValidPassword = encryptDecrypt.decryptPassword(req.body.password, userDetail.password);

    if (isValidPassword) {
        let userData = {
            "email": userDetail.email,
            "name": userDetail.name,
            "mobile": userDetail.mobile,
        }

        //Generate JWT token and send back to frontend
        let JWTtoken = JWTService.generateToken(userData);
        //Insert token in DB
        await tokenModel.insertMany([{ userId: userDetail._id, token: JWTtoken }]);
        console.log(userData)

        let response2 = await EmailService.sendMail({
            from: '"Team Royal Brothers Clone" <reddington7812@gmail.com>', // sender address
            to: userData.email, // list of receivers
            subject: "Logged In on Royal Brothers Clone.", // Subject line
            text: `Hello ${userData.name}, You have successfully Logged in on Royal Brothers Clone. `, // plain text body
            html: `<h1>Rent.Ride.Explore.</h1><br /><h3>Hello ${userData.name}, You have successfully Logged In on Royal Brothers Clone.</h3>
            `, // html body
          });

        res.json({
            status: 'success',
            token: JWTtoken,
            userDetail
        })
    } else {
        res.json({ message: "password is not valid" });
    }

}



module.exports = {
    Login
}