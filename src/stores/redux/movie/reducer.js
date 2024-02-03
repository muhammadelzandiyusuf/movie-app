import actionType from './actionType';
import { addDbCollection, tbRating, tbWatch, updateDbCollection, updateObject } from 'utils';

const initialState = {
  originalListMovies: [],
  movies: [],
  animeList: [],
  movieList: [],
  watchList: [],
  summaryList: [],
  search: '',
  movieDetail: null,
  ratings: [],
};

const getMovie = (state, action) => {
  const animeList = action.data?.filter((item) => item.type === 'Anime');
  const movieList = action.data?.filter((item) => item.type === 'Movie');
  const summaryList = action.data?.filter((item) => item.type === 'Summary');

  const originalList = state.originalListMovies;
  const search = state.search.toLowerCase();
  const searchList = originalList.filter(
    (row) =>
      row.title.toLowerCase().indexOf(search) > -1 ||
      row.year.toLowerCase().indexOf(search) > -1 ||
      row.type.toLowerCase().indexOf(search) > -1,
  );

  return updateObject(state, {
    ...state,
    originalListMovies: action.data,
    movies: search === '' ? action.data : searchList,
    animeList: animeList,
    movieList: movieList,
    summaryList: summaryList,
  });
};

const searchMovie = (state, action) => {
  const originalList = state.originalListMovies;
  const search = action.data.toLowerCase();
  const searchList = originalList.filter(
    (row) =>
      row.title.toLowerCase().indexOf(search) > -1 ||
      row.year.toLowerCase().indexOf(search) > -1 ||
      row.type.toLowerCase().indexOf(search) > -1,
  );
  return updateObject(state, {
    ...state,
    movies: searchList,
    search: action.data,
  });
};

const getMovieDetail = (state, action) => {
  const detail = state.originalListMovies.find((item) => item.id === action.id);
  return updateObject(state, {
    ...state,
    movieDetail: detail,
  });
};

const addWatchList = (state, action) => {
  const watchList = [...state.watchList];
  const exists = watchList.find((item) => item.id === action.data.id);
  if (exists === undefined) {
    watchList.push(action.data);
    addDbCollection(tbWatch, action.data);
  }
  return updateObject(state, {
    ...state,
    watchList: watchList,
  });
};

const deleteWatchList = (state, action) => {
  const watchList = state.watchList.filter((item) => item.id !== action.id);
  return updateObject(state, {
    ...state,
    watchList: watchList,
  });
};

const getWatchList = (state, action) => {
  return updateObject(state, {
    ...state,
    watchList: action.data,
  });
};

const getRating = (state, action) => {
  return updateObject(state, {
    ...state,
    ratings: action.data,
  });
};

const addRating = (state, action) => {
  let ratings = [...state.ratings];
  const exists = ratings.find((item) => item.id === action.data.id);
  if (exists === undefined) {
    ratings.push(action.data);
    addDbCollection(tbRating, action.data);
  } else {
    ratings = ratings.map((obj) => {
      if (obj.id === action.data.id) {
        return { ...obj, rating: action.data.rating };
      }
      return obj;
    });
    updateDbCollection(tbRating, action.data.id, { rating: action.data.rating });
  }
  return updateObject(state, {
    ...state,
    ratings: ratings,
  });
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_MOVIE:
      return getMovie(state, action);
    case actionType.SEARCH_MOVIE:
      return searchMovie(state, action);
    case actionType.GET_MOVIE_DETAIL:
      return getMovieDetail(state, action);
    case actionType.ADD_WATCHLIST:
      return addWatchList(state, action);
    case actionType.DELETE_WATCHLIST:
      return deleteWatchList(state, action);
    case actionType.GET_WATCHLIST:
      return getWatchList(state, action);
    case actionType.GET_RATING:
      return getRating(state, action);
    case actionType.ADD_RATING:
      return addRating(state, action);
    default:
      return state;
  }
};

export default movieReducer;
