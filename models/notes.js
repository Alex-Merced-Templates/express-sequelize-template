// import connection from connection.js
const connection = require("./connection");
// import DataTypes from sequelize
const { DataTypes } = require("sequelize");

// define schema of new model in our connection
const Note = connection.define("Note", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
  },
});

// define function to sync our model to our database and invoke it
async function migrate_note(){
    await Note.sync({ alter: true })
}

migrate_note()

// export our model to be used in our routes
module.exports = Note