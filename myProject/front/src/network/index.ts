import axios, { AxiosRequestConfig } from 'axios';

const apiAxios = axios.create({
  baseURL: 'http://localhost:3001/',
  withCredentials: true,
  timeout: 10000
});

apiAxios.interceptors.request.use((config:AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default apiAxios;
