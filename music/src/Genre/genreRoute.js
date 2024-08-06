const { getAll, create, getOne, remove, update } = require("./genreController");
const express = require("express");

const routerGenrer = express.Router();

routerGenrer.route("/").get(getAll).post(create);

routerGenrer.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerGenrer;
