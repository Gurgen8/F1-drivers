import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TStackRoutNavigationParams = {
  [EStackNavigationRoutes.DriversList]: undefined;
  [EStackNavigationRoutes.DriverInfo]: undefined;
};

export enum EStackNavigationRoutes {
  DriverInfo = 'DriverInfo',
  DriversList = 'DriversList',
}

export type TStackNavigationScreenProps<
  T extends keyof TStackRoutNavigationParams,
> = NativeStackScreenProps<TStackRoutNavigationParams, T>;
