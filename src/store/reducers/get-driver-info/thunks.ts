import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError, AxiosResponse} from 'axios';

import {parserXML} from '../../../helpers';
import {TParsedXmlDriverInfoData} from '../../types';
import {getDriverInfo} from './api';

export const getDriverInfoThunk = createAsyncThunk(
  'get/driver-info',
  async (driverId: string, {rejectWithValue}) => {
    try {
      const response: AxiosResponse<string> = await getDriverInfo(driverId);

      const parsedResponseData = parserXML.parse(
        response.data,
      ) as TParsedXmlDriverInfoData;

      return parsedResponseData.MRData.DriverTable.Driver;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error: AxiosError<{error: {message: string}}> = err;
        if (!error.response) {
          throw err;
        }
        return rejectWithValue(error.response.data);
      }
      throw err;
    }
  },
);
