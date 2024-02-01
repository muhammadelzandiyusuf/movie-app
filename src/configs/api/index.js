import baseUrl from 'configs/api/url';
import ApiRequest from 'configs/api/config';

const API = {};

// Driver
API.getDriver = ApiRequest.get(baseUrl.driver);

export default API;
