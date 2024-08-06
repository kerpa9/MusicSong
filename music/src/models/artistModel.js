const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Artist = sequelize.define("artist", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  country: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  formationYear: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },

  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Artist;
