import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import {AppNavigation} from './navigation';
import {persistor, store} from './store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
