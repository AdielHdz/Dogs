const { Router } = require("express");
const dogsRoutes = Router();
const { 
    getAllRaceDogs, 
    getDetailDog, 
    createDog
} = require("../handlers/dogsHandlers");

//                    HANDLER
dogsRoutes.get("/", getAllRaceDogs);
dogsRoutes.get("/:idRace", getDetailDog);
dogsRoutes.post("/", createDog);


module.exports = dogsRoutes;