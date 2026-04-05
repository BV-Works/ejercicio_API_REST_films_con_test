require('dotenv').config();

// const fetch = require('node-fetch');

const fetchFilm = async (title = "") => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) throw new Error("API_KEY no definida en .env");

    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
    const film = await response.json();

    if (film.Response === "False") return null;
    return film;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = fetchFilm;