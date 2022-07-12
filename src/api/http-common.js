import axios from 'axios';

const API_KEY = 'FYlvcWEDlWEYN00KzCCr';
export const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}`;

export default axios.create({
  baseURL: URL,
  headers: {
    'Content-type': 'application/json',
  },
});
