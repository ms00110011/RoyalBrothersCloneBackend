const bikeModel = require("../Model/Bike")

const SearchBikeLocation = async (req,res,next) => {

    const cty = req.params.city

    let data = await bikeModel.find({city:cty})
    console.log(data)
    res.json(data)


}

const SearchBikeLocationASC = async (req,res,next) => {

    const cty = req.params.city

    let data = await bikeModel.find({city:cty}).sort({priceHour:1})


    console.log(data)
    res.json(data)


}

const SearchBikeLocationDSC = async (req,res,next) => {

    const cty = req.params.city

    let data = await bikeModel.find({city:cty}).sort({priceHour:-1})

    console.log(data)
    res.json(data)


}

module.exports= {
    SearchBikeLocation,
    SearchBikeLocationASC,
    SearchBikeLocationDSC
}