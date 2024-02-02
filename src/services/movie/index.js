import { API } from 'configs';
import { addDbCollection, handleAsync, tbName } from 'utils';
import { store, getMovie } from 'stores';

const { dispatch } = store;

export const getMovies = async (payload = {}) => {
  const [res] = await handleAsync(API.getMovie(payload));
  if (res) {
    const data = res.axiosResponse.data;
    dispatch(getMovie(data));
    addDbCollection(tbName, { data });
    return data;
  }
};
