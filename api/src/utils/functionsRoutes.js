const axios = require("axios");

const getDogsApi = async (Id) => {

    return Id 
    ? await axios.get(`https://api.thedogapi.com/v1/breeds`).then(response => {
        const dog = response.data.find(dog => dog.id == Id);
        const { id, image, name, weight, height, temperament } = dog;
        return { id, image: image.url, name, weight, height, temperament }; 
    })
    : await axios.get("https://api.thedogapi.com/v1/breeds").then(response => response.data);
    
};


const filterDogsByName = (name, dogsInfo) => {

    const nameAdapted = name.toLowerCase();

    return dogsInfo.filter(dog => {
        const nameLower = dog.name.toLowerCase();
        if (nameLower === nameAdapted || nameLower.includes(nameAdapted)) return dog
    });
}

const cleanDataApi = (data) => {
    return data.map(dog => {
        return {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height,
            weight: dog.weight,
            temperament: dog.temperament,
        }
    });
};

const getAndCleanTemperaments = async () => {
    const temperamentsApi = await axios.get("https://api.thedogapi.com/v1/breeds").then(response => {
        return response.data
        .map(dog => dog.temperament)
        .join()
        .split(",")
        .map(temperament => temperament.trim())
        .filter(temperament => temperament !== null && temperament)

    })


    let cleanedTemperaments = [];

    for (let i = 0; i < temperamentsApi.length; i++) {
        if (cleanedTemperaments.indexOf(temperamentsApi[i]) === -1) cleanedTemperaments.push(temperamentsApi[i])
    };

    return cleanedTemperaments;
};

const forCreateTemperament = async (temperaments, Temperament) => {
    for (let i = 0; i < temperaments.length; i++) {
        let name = temperaments[i]
        await Temperament.create({ name });
    }
    return await Temperament.findAll();
};

module.exports = {
    getDogsApi,
    cleanDataApi,
    filterDogsByName,
    getAndCleanTemperaments,
    forCreateTemperament,
}

