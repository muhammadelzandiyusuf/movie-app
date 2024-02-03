import actionType from './actionType';

export const getMovie = (movie) => ({
  type: actionType.GET_MOVIE,
  data: movie,
});

export const searchMovie = (movie) => ({
  type: actionType.SEARCH_MOVIE,
  data: movie,
});

export const getMovieDetail = (id) => ({
  type: actionType.GET_MOVIE_DETAIL,
  id: id,
});
