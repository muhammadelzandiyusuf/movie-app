import appConfig from '../appConfigs';

export const config = appConfig;

const baseUrl = {
  movie: `${config.url.api}movies/`,
};

export default baseUrl;
