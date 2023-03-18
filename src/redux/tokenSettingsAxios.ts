import axios from 'axios';

const baseURL = 'https://backendBaseUrl';

export const axiosBaseUrl = axios.create({ baseURL });

export const token = {
  set(token?: string) {
    axiosBaseUrl.defaults.headers.common['Authorization'] = token
      ? `Bearer ${token}`
      : '';
  },
  unset() {
    this.set();
  },
};
