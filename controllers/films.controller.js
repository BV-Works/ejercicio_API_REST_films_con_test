const fetchFilm = require('../utils/fetchFilms');


const films = [
  {
    Title: "Train to Busan",
    Year: "2016",
    Rated: "Not Rated",
    Released: "20 Jul 2016",
    Runtime: "118 min",
    Genre: "Action, Horror, Thriller",
    Director: "Yeon Sang-ho",
    Writer: "Park Joo-suk, Yeon Sang-ho",
    Actors: "Gong Yoo, Jung Yu-mi, Ma Dong-seok",
    Plot: "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
    Language: "Korean, English, Hawaiian",
    Country: "South Korea",
    Awards: "36 wins & 42 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.6/10" },
      { Source: "Rotten Tomatoes", Value: "95%" },
      { Source: "Metacritic", Value: "73/100" },
    ],
    Metascore: "73",
    imdbRating: "7.6",
    imdbVotes: "300,921",
    imdbID: "tt5700672",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$2,129,768",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Titanic",
    Year: "1997",
    Rated: "PG-13",
    Released: "19 Dec 1997",
    Runtime: "194 min",
    Genre: "Drama, Romance",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
    Plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    Language: "English, Swedish, Italian, French",
    Country: "United States",
    Awards: "Won 11 Oscars. 126 wins & 84 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.0/10" },
      { Source: "Rotten Tomatoes", Value: "88%" },
      { Source: "Metacritic", Value: "75/100" },
    ],
    Metascore: "75",
    imdbRating: "8.0",
    imdbVotes: "1,383,106",
    imdbID: "tt0120338",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$674,354,882",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "The Wolf of Wall Street",
    Year: "2013",
    Rated: "R",
    Released: "25 Dec 2013",
    Runtime: "180 min",
    Genre: "Biography, Comedy, Crime",
    Director: "Martin Scorsese",
    Writer: "Terence Winter, Jordan Belfort",
    Actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie",
    Plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    Language: "English, French",
    Country: "United States",
    Awards: "Nominated for 5 Oscars. 38 wins & 180 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.2/10" },
      { Source: "Rotten Tomatoes", Value: "79%" },
      { Source: "Metacritic", Value: "75/100" },
    ],
    Metascore: "75",
    imdbRating: "8.2",
    imdbVotes: "1,759,293",
    imdbID: "tt0993846",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$116,900,694",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
];

const errors = {
  badRequest: { message: "Film not found" },
  notFound: { message: "Film not found" },
  server: { message: "Film not found" },
};

// GET
const getFilmByTitle = async (req, res) => {
  try {
    const { title } = req.params;

    if (!title) {
      return res.status(400).json(errors.badRequest);
    }

    let film = await fetchFilm(title);

    if (!film) {
      return res.status(404).json(errors.notFound);
    }

    res.status(200).json(film);
  } catch (error) {
    res.status(500).json(errors.server);
  }
};

// POST
// Payload {message: "Se ha guardado Titanic"}
const createFilm = async (req, res) => {
  try {
    const data = req.body;

    // const requiredFields = ["Title", "Year", "imdbID"];
    const requiredFields = ["Title"];

    const hasAllFields = requiredFields.every(field => data[field]);

    if (!data || !hasAllFields) {
      return res.status(400).json(errors.badRequest);
    }

    res.status(200).json({
      message: "Se ha guardado " + data.Title
    });

  } catch (error) {
    res.status(500).json(errors.server);
  }
};

// PUT
// Payload {id:"0", message: "Se ha actualizado Titanic"}
const updateFilm = (req, res) => {
  try {
    if (!req.body.id || !req.body.Title) {
      return res.status(400).json(errors.badRequest);
    }

    res.status(200).json({
      id: req.body.id,
      message: "Se ha actualizado " + req.body.Title,
    });
  } catch (error) {
    res.status(500).json(errors.server);
  }
};

// DELETE
// Payload {id: 123, message: "Se ha borrado la película con ID: 123"}
const deleteFilm = (req, res) => {
  try {
    if (!req.body.id) {
      return res.status(404).json(errors.notFound);
    }

    res.status(200).json({
      id: req.body.id,
      message: "Se ha borrado la película con ID: " + req.body.id,
    });
  } catch (error) {
    res.status(500).json(errors.server);
  }
};

module.exports = {
  createFilm,
  getFilmByTitle,
  updateFilm,
  deleteFilm,
};
