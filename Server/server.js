
const express = require("express")
const router=express.Router();
//import { request } from 'express';
import  Movie  from './models/movie';  // Make sure path is correct
const sequelize = new Sequelize(process.env.database, process.env.username,process.env.password, {
 host : process.env.host,
dialect:process.env.dialect
});
const app = express();
const port = process.env.PORT;
app.use(express.json());
sequelize.authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.error('Database connection failed:', err));

// Basic Route to confirm server is running
app.get('/', (req, res) => {
  res.send('Hello, Movie Booking System!');
});

app.get('/movies', async (req, res,err) => {
  console.log("GET /movies route hit");
  try {
    const movies = await Movie.findAll();
    console.log("Movies fetched:", movies);
    res.json(movies);
  } catch (err) {
    console.error("Error fetching movies:", err);
    res.status(500).json({ err: 'Error fetching movies' });
  }
});


// Add a new movie
app.post('/movies', async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.json(newMovie);
  } catch (error) {
    res.status(500).json({ error: 'Error creating movie' });
  }
});


// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
  // For parsing application/json

