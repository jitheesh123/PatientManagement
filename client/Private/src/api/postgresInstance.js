import axios from 'axios';

const mongoInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: { Authorization: `Bearer ${localStorage.getItem('tokenss')}` },
});

mongoInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('tokenss')}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default mongoInstance;
