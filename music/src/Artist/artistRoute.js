const {
  getAll,
  create,
  getOne,
  remove,
  update,
  setGenres,
} = require("./artistController");
const express = require("express");

const routerArtist = express.Router();

routerArtist.route("/:id/genres").post(setGenres);

routerArtist.route("/").get(getAll).post(create);

routerArtist.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerArtist;
