const antiquesRouter = require("./src/api/routes/antiques");
const { connectDB } = require("./src/config/db");
const { scrapper } = require("./src/utils/scrapper");
require("dotenv").config();
const express = require("express");

const app = express();

connectDB();

app.use("/api/v1/antiques", antiquesRouter);


app.use("*", (req, res, next) => {
    return res.status(404).json("Not found!")
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})

// scrapper("https://www.superbritanico.com/165-antiques");
