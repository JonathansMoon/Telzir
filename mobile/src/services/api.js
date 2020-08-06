import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.100.4.69/api',
  // baseURL: 'http://192.168.0.6/api',
});

export default api;
