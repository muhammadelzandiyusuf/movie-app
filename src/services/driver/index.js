import { API } from 'configs';
import { handleAsync } from 'utils';
import { store, getDriver } from 'stores';

const { dispatch } = store;

export const getDrivers = async (payload = {}) => {
  const [res] = await handleAsync(API.getDriver(payload));
  if (res) {
    const data = res.axiosResponse.data;
    dispatch(getDriver(data));
    return data;
  }
};
