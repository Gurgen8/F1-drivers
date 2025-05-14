import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationConfig} from './config';
import {EStackNavigationRoutes, TStackRoutNavigationParams} from './types';
import {DriversListScreen, DriverInfoScreen} from '../screens';

const Stack = createNativeStackNavigator<TStackRoutNavigationParams>();

export const AppNavigation = () => (
  <Stack.Navigator screenOptions={navigationConfig}>
    <Stack.Screen
      name={EStackNavigationRoutes.DriversList}
      component={DriversListScreen}
    />
    <Stack.Screen
      name={EStackNavigationRoutes.DriverInfo}
      component={DriverInfoScreen}
    />
  </Stack.Navigator>
);
