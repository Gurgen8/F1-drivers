import axios from 'axios';
import {API_URL} from '../constants';

export const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
