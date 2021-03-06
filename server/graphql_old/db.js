let movies = [
  {
    id: 0,
    name: "Star Wars - The Empire Strikes Back",
    score: 82,
  },
  {
    id: 1,
    name: "Avengers: Endgame",
    score: 78,
  },
  {
    id: 2,
    name: "The Godfather",
    score: 100,
  },
  {
    id: 3,
    name: "Logan",
    score: 77,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
