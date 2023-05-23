const { Router } = require("express");
const { getAllTemperaments } = require("../handlers/temperamentsHandlers");
const temperamentsRoutes = Router();

temperamentsRoutes.use("/", getAllTemperaments)

module.exports = temperamentsRoutes;