const { getAndCleanTemperaments, forCreateTemperament } = require("../utils/functionsRoutes");
const { Temperament } = require("../db")


const getTemperaments = async () => {


    const temperamentDB = await Temperament.findAll();
    const temperaments = await getAndCleanTemperaments();


    if (!temperamentDB.length) {
        const temperamentsCreated = await forCreateTemperament(temperaments, Temperament);
        return temperamentsCreated;
    } 


    return temperamentDB;


    
    
};


module.exports = {
    getTemperaments,
};