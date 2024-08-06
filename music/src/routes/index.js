const express = require("express");
const routerGenrer = require("../Genre/genreRoute");
const routerArtist = require("../Artist/artistRoute");
const routerSong = require("../Song/songRoute");
const routerAlbum = require("../Album/albumRoute");
const router = express.Router();

// colocar las rutas aquí
router.use("/genres", routerGenrer);
router.use("/artists", routerArtist);
router.use("/songs", routerSong);
router.use("/albums", routerAlbum);

module.exports = router;
