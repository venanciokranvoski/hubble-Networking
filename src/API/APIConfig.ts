import axios from 'axios';

export const apiConfig = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.T1hQH2HGveQNHM5GmDXFivJc7I-wkqwFpBEu3-cI3VHYcY_6q9TW26WbaaWZ',
  },
});
