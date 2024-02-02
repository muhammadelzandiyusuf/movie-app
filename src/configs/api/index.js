import baseUrl from 'configs/api/url';
import ApiRequest from 'configs/api/config';

const API = {};

// Driver
API.getMovie = ApiRequest.get(baseUrl.movie);

export default API;
