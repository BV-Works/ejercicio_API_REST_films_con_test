const router = require("express").Router();
const filmsControler = require("../controllers/films.controller");

// get http://localhost:3000/api/film/:title
//  Retorna un JSON con los detalles de la peli en concreto buscada. 
// Payload {title:"Titanic", author:"James Cameron", description:"xxx", src:"titanic.png",etc...}
router.get("/:title", filmsControler.getFilmByTitle);

// post  http://localhost:3000/api/film/
// Se envía por POST los datos de la película a crear y retorna un status 200. 
// Payload {message: "Se ha guardado Titanic"}
router.post("/", filmsControler.createFilm);
// Ej estructura body:
// {"Title":"Titanic","Year":"1997","Rated":"PG-13","Released":"19 Dec 1997","Runtime":"194 min","Genre":"Drama, Romance","Director":"James Cameron","Writer":"James Cameron","Actors":"Leonardo DiCaprio, Kate Winslet, Billy Zane","Plot":"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.","Language":"English, Swedish, Italian, French","Country":"United States","Awards":"Won 11 Oscars. 126 wins & 84 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"8.0","imdbVotes":"1,383,106","imdbID":"tt0120338","Type":"movie","DVD":"N/A","BoxOffice":"$674,354,882","Production":"N/A","Website":"N/A","Response":"True"}


// put http://localhost:3000/api/film/ 
// Actualiza los datos de una película y retorna un status 200. 
router.put("/", filmsControler.updateFilm);

// delete http://localhost:3000/api/film/ 
// Borra una película y retorna un status 200. 
// Pasar por el body el id de la película que quieras borrar. 
router.delete("/", filmsControler.deleteFilm);

module.exports = router;
