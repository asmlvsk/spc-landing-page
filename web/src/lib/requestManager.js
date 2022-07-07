import axios from 'axios';
import qs from 'qs';

const { API_URL } = process.env;
const { HOST } = process.env;

const instance = axios.create({
  baseURL:         '/',
  withCredentials: true
});

export default {
  delete: (path, params = {}) => instance.delete(path, {
                                   params:           params,
                                   paramsSerializer: (query) => qs.stringify(query, { arrayFormat: 'comma' })
                                 }),
  get: (path, params = {}) => instance.get(path, {
                                params:           params,
                                paramsSerializer: (query) => qs.stringify(query, { arrayFormat: 'comma' })
                              }),
  post: (path, params = {}) => instance.post(path, params),
  put:  (path, params = {}) => instance.put(path, params)
};
