import Localbase from 'localbase';

const localDb = new Localbase('movies');

export const getPath = (path = '') => (path ? `/${path}` : '');

export const createUrlParamFromObj = (params = null) => {
  if (!params) return '';
  const result = [];
  Object.keys(params).map((key) => result.push(`${key}=${params[key]}`));
  return `?${result.join('&')}`;
};

export const getCustomUrl = (url = '') => url;

export const getContentType = (type = '') => {
  switch (type) {
    case 'form-data':
      return 'multipart/form-data';
    default:
      return 'application/json';
  }
};

export const createHeader = (value = {}, base = {}) => ({
  ...base,
  ...value,
});

export const handleAsync = async (promise) => {
  try {
    const response = await promise;
    return [response, undefined];
  } catch (err) {
    return [undefined, err];
  }
};

export const updateObject = (oldObject, updateProperties) => {
  return {
    ...oldObject,
    ...updateProperties,
  };
};

export const getSliceData = (params, limit) => {
  const page = parseInt(params.get('page') ? params.get('page') : 1);
  const from = (page - 1) * limit;
  const to = page * limit;
  return {
    from,
    to,
    page,
  };
};

export const addDbCollection = (table, value) => {
  localDb.collection(table).add(value);
};
