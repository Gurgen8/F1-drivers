import {httpClient} from '../../../api';

export const getDriverInfo = (driverId: string) =>
  httpClient.post(`drivers/${driverId}`);
