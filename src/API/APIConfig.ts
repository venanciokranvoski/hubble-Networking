import axios from 'axios';

export const apiConfig = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer Nw.W1ZfougEzuF1wNhx3J7j2SwDqKH4q6R4wBizzCEP3Kp9VxiP_OYLLz8szG8g',
  },
});
