const {
    getAllDogsRace,
    getAllRacesByName,
    getDogDetail,
    getAllRaces,
    createDogDB,
} = require("../controllers/dogsControllers");

const getAllRaceDogs = async (req, res) => {

    const { name } = req.query;

    try {
        const allRaces = name 
        ? await getAllRacesByName(name)
        : await getAllDogsRace(); 
        res.status(200).json(allRaces)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const getDetailDog = async (req, res) => {
    const { idRace } = req.params;
    const font = isNaN(idRace) ? "BDD" : "API";
    try {
        const dogDetail = await getDogDetail(idRace, font);
        res.status(200).json(dogDetail)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const getQueryRaceDogs = async (req,res) => {
    const { name } = req.query;
    try {
        const races = await getAllRaces(name);
        res.status(200).json(races) 
    } catch (error) {
        res.status().json({error: error.message})
    }
};


const createDog = async (req, res) => {
    const { image, name, height, weight, averagelife, temperamentId } = req.body
    try {
        const newDog = await createDogDB({ image, name, height, weight, averagelife, temperamentId } );
        res.status(200).json( {succes: "New Dog Created", Dog: newDog } );
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}; 


module.exports = {
    getAllRaceDogs, 
    getDetailDog, 
    getQueryRaceDogs, 
    createDog 
};