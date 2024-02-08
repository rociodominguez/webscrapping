const mongoose = require("mongoose");

const antiqueSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: String, required: false},
    img: {type: String, required: true}
}, {
    timestamps: true,
    collection: "antiques",
});

const Antique = mongoose.model("antiques", antiqueSchema, "antiques");

module.exports = Antique;