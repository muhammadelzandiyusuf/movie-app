import actionType from './actionType';

export const getDriver = (driver) => ({
  type: actionType.GET_DRIVER,
  data: driver,
});

export const searchDriver = (driver) => ({
  type: actionType.SEARCH_DRIVER,
  data: driver,
});
