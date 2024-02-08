const mongoose = require("mongoose");

const connectDB = async () => {
try {
    mongoose.connect(process.env.DB_URL)
    console.log("Conectado a la BD");
} catch (error) {
    console.log("Error al conectar a la BD");
}
}

module.exports = { connectDB }