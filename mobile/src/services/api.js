import axios from 'axios';

const api = axios.create({
  baseURL: 'meuIP/api',
});

export default api;
