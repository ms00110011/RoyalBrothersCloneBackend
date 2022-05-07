const userModel = require('../Model/User');
const JWTService = require('../CommonLib/JWTtoken');
const encryptDecrypt = require('../CommonLib/Encrypt-Decrypt');
const tokenModel = require('../Model/token');
const EmailService = require("../Notification/EmailService");




async function SignUp(req, res, next) {

    let userDetail = req.body;
    const encryptPassword = encryptDecrypt.encryptPassword(userDetail.password);
    userDetail.password = encryptPassword;

    console.log("Inside sign in")

    const response = await userModel.insertMany([userDetail]);

    //Generate JWT token and send back to frontend
    let JWTtoken = JWTService.generateToken(userDetail);
    //Insert token in DB
    await tokenModel.insertMany([{ userId: response[0]._id, token: JWTtoken }]);

    console.log(userDetail)

    let response2 = await EmailService.sendMail({
        from: '"Team Royal Brothers Clone" <reddington7812@gmail.com>', // sender address
        to: userDetail.email, // list of receivers
        subject: "Successfully Signed Up!", // Subject line
        text: `Hello ${response[0].first_name}, You have successfully registered on Royal Brothers Clone. `, // plain text body
        html: `<h1>Rent.Ride.Explore.</h1><br /><h3>Hello ${response[0].name}, You have successfully registered on Royal Brothers Clone.</h3>
        `, // html body
      });
    

    res.json({
        status: 'success',
        token: JWTtoken,
        userDetail: response[0]
    })
}

module.exports = {
    SignUp
}