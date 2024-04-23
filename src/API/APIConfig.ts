import axios from 'axios';

export const apiConfig = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.xtEe0_uC85fLwKnr86IPo8xWlQKmtZ70yH1WQ4C4bso3m7sX2sOzPyCTyXsk',
  },
});
