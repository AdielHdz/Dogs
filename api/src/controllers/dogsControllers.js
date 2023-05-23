const { Dog, Temperament } = require("../db");
 const { getDogsApi, cleanDataApi, filterDogsByName } = require("../utils/functionsRoutes");

const getAllDogsRace = async () => {
    const apiData = await getDogsApi();

    const allDogsApi = cleanDataApi(apiData);
    const allDogsDB = await Dog.findAll();

    return [ ...allDogsDB, ...allDogsApi]
};


const getDogDetail = async (id, font) => {

    return font === "BDD" 
    ? await Dog.findByPk(id) 
    : await getDogsApi(id);

};

const getAllRacesByName = async (name) => {
    
    
    const dogsApi = await getDogsApi();
    const dogsDB = await Dog.findAll();


    const racesApi = cleanDataApi(filterDogsByName(name, dogsApi));
    const racesDB = filterDogsByName(name, dogsDB);
    

    return racesApi.length || racesDB.length
    ? [ ...racesDB, ...racesApi ]
    : { error: "No se encontraron coincidencias" };
};


const createDogDB = async (dog) => {

    const { image, name, height, weight, averagelife, temperamentId } = dog;

    const newDog = await Dog.create( { image, name, height, weight, averagelife } );
    const temperamentsToAdd = await Temperament.findAll({
        where: {
            id: temperamentId
        }
    })

    await newDog.addTemperaments(temperamentsToAdd)



    return newDog;
};


module.exports = {
    getAllDogsRace,
    getAllRacesByName,
    getDogDetail,
    createDogDB,
};