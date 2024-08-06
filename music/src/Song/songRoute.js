const express = require("express");
const {
  getAll,
  create,
  setSongs,
  setSongArtists,
} = require("./songController");

const routerSong = express.Router();

routerSong.route("/").get(getAll).post(create);
routerSong.route("/:id/albums").post(setSongs);
routerSong.route("/:id/artists").post(setSongArtists);

module.exports = routerSong;
