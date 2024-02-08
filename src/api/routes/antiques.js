const { insertAntiques, getAntiques } = require("../controllers/antiques");

const antiquesRouter = require("express").Router();

antiquesRouter.get("/", getAntiques)
antiquesRouter.post("/post", insertAntiques)

module.exports = antiquesRouter;