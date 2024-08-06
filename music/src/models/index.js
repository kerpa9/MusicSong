const Album = require("../models/albumModel");
const Artist = require("../models/artistModel");
const Genre = require("../models/genreModel");
const Song = require("./songModel");

Genre.belongsToMany(Artist, { through: "genresArtist" });
Artist.belongsToMany(Genre, { through: "genresArtist" });

Artist.belongsToMany(Album, { through: "albumsArtist" });
Album.belongsToMany(Artist, { through: "albumsArtist" });

Song.belongsToMany(Album, { through: "songsAlbums" });
Album.belongsToMany(Song, { through: "songsAlbums" });

Song.belongsToMany(Artist, { through: "songsArtist" });
Artist.belongsToMany(Song, { through: "songsArtist" });
