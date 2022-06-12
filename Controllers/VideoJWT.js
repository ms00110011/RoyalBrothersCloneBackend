
var jwt = require('jsonwebtoken');
var uuid4 = require('uuid4');

var app_access_key = '<app_access_key>';
var app_secret = '<app_secret>';

 function videoJWT (req,res,next) {

    var payload = {
        access_key: '62a5acfbb873787aa2709556',
        room_id: req.body.room_id,
        user_id: req.body.user_id,
        role: req.body.role,
        type: 'app',
        version: 2,
        iat: Math.floor(Date.now() / 1000),
        nbf: Math.floor(Date.now() / 1000)
    };
    
    jwt.sign(
        payload,
        app_secret,
        {
            algorithm: 'HS256',
            expiresIn: '24h',
            jwtid: uuid4()
        },
        function (err, token) {
            console.log(token);
            res.json(token)
        }
    );

}


module.exports = {
    videoJWT
}