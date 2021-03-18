import { addMovie, deleteMovie, getById, getMovies } from "./db";

const resolvers = {
  // query에 저장된 이름과 타입이 일치해야 한다.
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
