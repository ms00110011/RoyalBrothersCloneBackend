const bikeModel = require("../Model/Bike")

const bikeController = async (req,res,next) => {
    
    let data = await bikeModel.find()
    console.log(data)
    res.json(data)


}

module.exports= {
    bikeController
}