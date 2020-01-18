
  const Sequelize = require('sequelize')

  const sequelize = new Sequelize('prueba','root','', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  let books = sequelize.define('books', {
  
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    editorial: Sequelize.STRING
  },
  {
      timestamps: false
  })
  
  module.exports = books;