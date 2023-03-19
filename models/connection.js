const { Sequelize } = require("sequelize");
require("dotenv").config();

// Fetch DATABASE_URL variable from .env
const DATABASE_URL = process.env.DATABASE_URL;

// Establish Database Connection
const connection = new Sequelize(DATABASE_URL);

// Prove Connectio Established
async function test_connection() {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

test_connection();

module.exports = connection;
