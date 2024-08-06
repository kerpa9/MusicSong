const catchError = require("../utils/catchError");
const Song = require("../models/songModel");
const Album = require("../models/albumModel");
const Artist = require("../models/artistModel");

const getAll = catchError(async (req, res) => {
  const results = await Song.findAll({ include: [Album] });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Song.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Song.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Song.destroy({ where: { id } });
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Song.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

const setSongs = catchError(async (req, res) => {
  const { id } = req.params;
  const album = await Album.findByPk(id);
  await album.setSongs(req.body);
  const albums = await album.getSongs();
  return res.json(albums);
});

const setSongArtists = catchError(async (req, res) => {
  const { id } = req.params;
  const song = await Song.findByPk(id);
  await song.setSongArtists(req.body);
  const songs = await song.getSongArtists();
  return res.json(songs);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  setSongs,
  setSongArtists,
};
