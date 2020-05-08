const Sequelize = require('sequelize')
const db = require('../db')

const Movies = db.define('movies', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defaultValue:
      'https://www.booooooom.com/wp-content/uploads/2015/04/emptyfilmposters-02.jpg'
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  rating: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true,
      isFloat: true,
      isDecimal: true,
      min: 0.0,
      max: 5.0
    }
  }
})

module.exports = Movies
// Include your models in this exports object as well!
