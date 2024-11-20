// models/movie.js
// Inside movie.js, add this if not already there:
import { sequelize,DataTypes } from 'sequelize';
// import sequelize.sync()
//   .then(() => console.log('Models synchronized with the database'))
//   .catch((err) => console.error('Error syncing models:', err));


// Define Movie model
const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,  // Title is required
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,  // Director is required
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,  // Year is required
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,  // Genre is optional
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: true,  // Duration is optional
  }
});

export default Movie;