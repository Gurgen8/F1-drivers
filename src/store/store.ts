import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import * as reducers from './reducers';

const rootReducer = combineReducers({
  GetDriverInfo: reducers.GetDriverInfoSlice,
  GetDriversList: reducers.GetDriverListSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureCustomStore = () => {
  const store = configureStore({
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: {warnAfter: 128},
        serializableCheck: false,
      }),
    reducer: persistedReducer,
  });
  const persistor = persistStore(store);

  return {persistor, store};
};

export const {store, persistor} = configureCustomStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
