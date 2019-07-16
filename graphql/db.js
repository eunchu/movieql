let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99
  },
  {
    id: 3,
    name: "Logan",
    score: 10
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filterMovies = movies.filter(movie => movie.id === id);
  return filterMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
