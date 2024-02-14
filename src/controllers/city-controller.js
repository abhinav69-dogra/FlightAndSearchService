const {CityService} = require('../services/index');

const cityService= new CityService
const create = async (req,res) =>{
    try {
        const city= await cityService.createCity(req.body);

        return res.status(200).json({
            data : city,
            success : true,
            message : 'successfully created a city',
            err : {}     
        })
    } catch (error) {
        console.log("something wrong")
        return res.status(500).json({
            data : {},
            success : false,
            message : 'not able to create a city',
            err : error
        })
    }
}

const get = async (req,res) =>{
    try {
        const response= await cityService.getCity(req.param.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fetched a city',
            err : {}


        })
        
    } catch (error) {
        console.log("something wrong")
        return res.status(500).json({
            data : {},
            success : false,
            message : 'not able to fetch the city',
            err : error
        })
    }


}

const destroy  = async (req,res) =>{
    try {
        const response= await cityService.deleteCity(req.param.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted a city',
            err : {}
        })
    } catch (error) {
        console.log("something wrong")
        return res.status(500).json({
            data : {},
            success : false,
            message : 'not able to delete a city',
            err : error
        })
    }

}

const update = async (req,res) =>{
    try {
        const response= await cityService.updateCity(req.param.id, req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted a city',
            err : {}
        })
    } catch (error) {
        console.log("something wrong")
        return res.status(500).json({
            data : {},
            success : false,
            message : 'not able to update a city',
            err : error
        })
    }
}


module.exports= {
    create,
    get,
    destroy,
    update
}