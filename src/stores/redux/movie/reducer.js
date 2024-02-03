import actionType from './actionType';
import { updateObject } from 'utils';

const initialState = {
  originalListMovies: [],
  movies: [],
  animeList: [],
  movieList: [],
  watchList: [],
  summaryList: [],
  search: '',
  movieDetail: null,
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
  console.log('detail', detail);
  console.log('state.originalListMovies', state.originalListMovies);
  console.log('action.id', action.id);
  return updateObject(state, {
    ...state,
    movieDetail: detail,
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
    default:
      return state;
  }
};

export default movieReducer;
