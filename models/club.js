'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    static associate(models) {
      // define association here
      Club.hasMany(models.Bookmark, {foreignKey: 'ClubId'})
    }
  };
  Club.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    stadion: DataTypes.STRING,
    country: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Club',
  });
  return Club;
};