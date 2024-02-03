import { API } from 'configs';
import {
  addDbCollection,
  deleteAllCollection,
  deleteDbCollection,
  handleAsync,
  tbName,
  tbWatch,
} from 'utils';
import {
  store,
  getMovie,
  addWatchList,
  getWatchList,
  deleteWatchList,
  getRating,
  addRating,
} from 'stores';

const { dispatch } = store;

export const getMovies = async (payload = {}) => {
  const [res] = await handleAsync(API.getMovie(payload));
  if (res) {
    deleteAllCollection(tbName);
    const data = res.axiosResponse.data;
    dispatch(getMovie(data));
    addDbCollection(tbName, { data });
    return data;
  }
};

export const getWatchlist = (data) => {
  dispatch(getWatchList(data));
};

export const addWatchlist = (data) => {
  dispatch(addWatchList(data));
};

export const deleteWatchlist = (id) => {
  dispatch(deleteWatchList(id));
  deleteDbCollection(tbWatch, id);
};

export const getRatings = (data) => {
  dispatch(getRating(data));
};

export const addRatings = (data) => {
  dispatch(addRating(data));
};
