const bikeModel = require("../Model/Bike")

const SearchBikeSingle = async (req,res,next) => {

    let data = await bikeModel.findById(req.params.id)
    console.log(data)
    res.json(data)


}

module.exports= {
    SearchBikeSingle
}