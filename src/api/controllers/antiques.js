const Antique = require("../models/antiques");
const antiques = require("../../../antiques.json");

const insertAntiques = async (req, res, next) => {
    try {
        const result = await Antique.insertMany(antiques.results);
        console.log("Resultado de la inserción:", result);
        return res.status(200).json("Antigüedades subidas a la BD");
    } catch (error) {
        console.error("Error insertando datos:", error);
        return res.status(400).json("Error insertando datos");
    }
}


const getAntiques = async (req, res, next) => {
    try {
        const allAntiques = await Antique.find();
        return res.status(200).json(allAntiques)
    } catch (error) {
        return res.status(400).json(error)
    }
}

module.exports = { insertAntiques, getAntiques }