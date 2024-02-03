// eslint-disable-next-line no-undef
const activeConfig = process.env.REACT_APP_ENV;
// eslint-disable-next-line no-undef
const apiURL = process.env.REACT_APP_API_URL;
// eslint-disable-next-line no-undef
const domain = process.env.REACT_APP_DOMAIN_NAME;
// eslint-disable-next-line no-undef
const apiURLProd = process.env.REACT_APP_API_URL;
// eslint-disable-next-line no-undef
const domainProd = process.env.REACT_APP_DOMAIN_NAME;

const constants = {
  dev: {
    url: {
      api: apiURL,
      origin: domain,
    },
  },

  production: {
    url: {
      api: apiURLProd,
      origin: domainProd,
    },
  },
};

const appConfig = constants[activeConfig];

export default appConfig;
