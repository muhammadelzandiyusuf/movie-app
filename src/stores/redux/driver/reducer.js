import actionType from './actionType';
import { updateObject } from 'utils';

const initialState = {
  originalListDrivers: [],
  drivers: [],
};

const getDriver = (state, action) => {
  return updateObject(state, {
    ...state,
    originalListDrivers: action.data.results,
    drivers: action.data.results,
  });
};

const searchDriver = (state, action) => {
  const originalList = state.originalListDrivers;
  const search = action.data.toLowerCase();
  const searchList = originalList.filter(
    (row) =>
      row.name.first.toLowerCase().indexOf(search) > -1 ||
      row.name.last.toLowerCase().indexOf(search) > -1,
  );
  return updateObject(state, {
    ...state,
    drivers: searchList,
  });
};

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_DRIVER:
      return getDriver(state, action);
    case actionType.SEARCH_DRIVER:
      return searchDriver(state, action);
    default:
      return state;
  }
};

export default driverReducer;
