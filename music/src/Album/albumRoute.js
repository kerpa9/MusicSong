const express = require("express");
const { getAll, create, setArtists } = require("./albumController");

const routerAlbum = express.Router();

routerAlbum.route("/").get(getAll).post(create);
routerAlbum.route("/:id/artists").post(setArtists);

module.exports = routerAlbum;
