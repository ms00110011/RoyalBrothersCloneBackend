const bikeModel = require("../Model/Bike")

const SearchBikeSingle = async (req,res,next) => {

try {
    let data = await bikeModel.findById(req.params.id)
    console.log(data)
    res.json(data)
}

catch(error) {
    console.log(error)
} 


}

module.exports= {
    SearchBikeSingle
}