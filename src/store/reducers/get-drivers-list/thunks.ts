import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {TParsedXmlDriverListData} from '../../types';
import {parserXML} from '../../../helpers';
import {getDriversList} from './api';

export const getDriversListThunk = createAsyncThunk(
  'get/drivers-list',
  async (offset: number, {rejectWithValue}) => {
    try {
      const response: AxiosResponse<string> = await getDriversList(offset);

      const parsedResponseData = parserXML.parse(
        response.data,
      ) as TParsedXmlDriverListData;
      return {
        data: parsedResponseData.MRData.DriverTable.Driver,
        total: parsedResponseData.MRData?.['@_total'],
      };
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
