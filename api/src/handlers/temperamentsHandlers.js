const { getTemperaments } = require("../controllers/temperamentsControllers")


const getAllTemperaments = async (req, res) => {
    try {
        const allTemperaments = await getTemperaments();
        res.status(200).json(allTemperaments)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};



module.exports = {
    getAllTemperaments,
};