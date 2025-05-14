import {httpClient} from '../../../api';

export const getDriversList = (offset: number, limit: number = 15) =>
  httpClient.get(`drivers?limit=${limit}&offset=${offset}`);
