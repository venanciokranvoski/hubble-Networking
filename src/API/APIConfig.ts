import axios from 'axios';

export const apiConfig = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.3hI6Y7tAddhLjGwuvi_q4_1tzzLTQicfMi6RR0qByApNXB77bBuKugLwNHY_',
  },
});
