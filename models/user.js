'use strict';
const {
  Model
} = require('sequelize');
const {encode} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Bookmark, {foreignKey: 'UserId'})
    }
  };
  User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Email Cant be Empty' },
            notNull: { msg: 'Email Cant be Empty' },
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Password Cant be Empty' },
            notNull: { msg: 'Password Cant be Empty' },
        }
    }
  }, {
    hooks: {
        beforeCreate: (user) => {
            user.password = encode(user.password)
        }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};