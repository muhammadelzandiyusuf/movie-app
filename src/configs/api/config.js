import axios from 'axios';
import { toast } from 'react-toastify';
import { getPath, getCustomUrl, createUrlParamFromObj, getContentType, createHeader } from 'utils';

export const apiInstance = axios.create({
  baseURL: '',
  timeout: 60000,
  validateStatus: (status) => status >= 200 && status <= 500,
});

class ApiRequest {
  static request = async (method = 'GET', route = '', payload = {}) => {
    const path = getPath(payload.path);
    const params = createUrlParamFromObj(payload.params);
    const customUrl = getCustomUrl(payload.url);
    const contentType = getContentType(payload.type);
    const baseHeaders = { 'Content-Type': contentType };
    const headers = createHeader(payload.headers, baseHeaders);
    const url = customUrl.length > 0 ? customUrl : route + path + params;
    const data = payload.body ? payload.body : {};
    const requestObj = { url, headers, method, data };

    try {
      const response = await apiInstance.request(requestObj);
      const responseData = response.data;
      if (responseData) {
        return { axiosResponse: response, ...responseData };
      }
      return { axiosResponse: response, ...response };
    } catch (err) {
      toast.error('Terjadi kesalahan pada pengambilan data', {
        hideProgressBar: true,
        closeButton: false,
        autoClose: 3000,
        theme: 'colored',
        position: 'top-right',
      });
    }
  };

  static get = (route) => (payload) => this.request('GET', route, payload);

  static put = (route) => (payload) => this.request('PUT', route, payload);

  static post = (route) => (payload) => this.request('POST', route, payload);

  static delete = (route) => (payload) => this.request('DELETE', route, payload);

  static patch = (route) => (payload) => this.request('PATCH', route, payload);
}

export default ApiRequest;
