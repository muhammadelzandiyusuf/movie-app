import appConfig from '../appConfigs';

export const config = appConfig;

const baseUrl = {
  driver: `${config.url.api}api/`,
};

export default baseUrl;
