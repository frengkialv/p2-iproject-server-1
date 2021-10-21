'use strict';
const {
  Model
} = require('sequelize');
const {encode} = require('../helpers/bcrypt')
const nodemailer = require('nodemailer');
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
            
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'app.sports.news@gmail.com',
                  pass: 'test1919' // naturally, replace both with your real credentials or an application-specific password
                }
              });
              
              const mailOptions = {
                from: 'app.sports.news@gmail.com',
                to: user.email,
                subject: `Hai ${user.email}`,
                text: 'Terima kasih sudah menjadi bagian dari sport news, selalu kunjungi sport news untuk mengetahui berita olahraga terupdate dan terpopuler.'
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  res.status(200).json({msg: `Thanks ${user.email} for being a part of news sports`})
                }
              });
        }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};