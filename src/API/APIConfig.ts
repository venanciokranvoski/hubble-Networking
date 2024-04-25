import axios from 'axios';

export const apiConfig = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.6YpzPF1Y6fciVrR5PCk7nnOjIiLghTA1nOklCa1hJ3bQDOfYwbumXbqPBAgH',
  },
});
