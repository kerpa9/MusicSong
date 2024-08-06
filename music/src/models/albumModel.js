const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Album = sequelize.define("album", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  image: {
    type: DataTypes.TEXT,
  },

  reaseYear: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
});

module.exports = Album;
