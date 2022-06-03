import axios, { AxiosRequestConfig } from 'axios';

const makeRequest = async ({ url, method = 'GET', data = {}, params = {} }: AxiosRequestConfig) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      params,
      baseURL: 'http://localhost:3000/',
      timeout: 10000
    });

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export default makeRequest;
