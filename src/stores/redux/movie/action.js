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

export const addWatchList = (data) => ({
  type: actionType.ADD_WATCHLIST,
  data: data,
});

export const deleteWatchList = (id) => ({
  type: actionType.DELETE_WATCHLIST,
  id: id,
});

export const getWatchList = (data) => ({
  type: actionType.GET_WATCHLIST,
  data: data,
});

export const getRating = (data) => ({
  type: actionType.GET_RATING,
  data: data,
});

export const addRating = (data) => ({
  type: actionType.ADD_RATING,
  data: data,
});
