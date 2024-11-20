const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  username: "root",
  password: "MySQL",
  database: "movie_booking_system",
  host: "127.0.0.1",
  dialect: "mysql"
});

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});
async function testConnection() {
  try {
    await sequelize.authenticate(); // This tests the database connection
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Call the test function to check connection
testConnection();
// Ensure the model is exported properly
module.exports = { Movie, sequelize };

