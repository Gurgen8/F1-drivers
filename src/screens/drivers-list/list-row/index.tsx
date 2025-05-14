import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {FC, memo} from 'react';
import {View, Text, Linking, TouchableOpacity, Alert} from 'react-native';

import {useAppDispatch, getDriverInfoThunk} from '../../../store';
import {
  EStackNavigationRoutes,
  TStackRoutNavigationParams,
} from '../../../navigation';

import {TListRowProps} from './types';
import {styles} from './styles';

export const ListRow: FC<TListRowProps> = memo(({itemData}) => {
  const navigation =
    useNavigation<NavigationProp<TStackRoutNavigationParams>>();
  const dispatch = useAppDispatch();

  const openBiography = () => {
    Linking.openURL(itemData['@_url']);
  };

  const openDriverInfo = () => {
    dispatch(getDriverInfoThunk(itemData['@_driverId']))
      .unwrap()
      .then(() => {
        navigation.navigate(EStackNavigationRoutes.DriverInfo);
      })
      .catch(error => Alert.alert(JSON.stringify(error)));
  };

  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={openDriverInfo}>
        <Text>{`${itemData.GivenName} ${itemData.FamilyName}`}</Text>
      </TouchableOpacity>

      <Text>{itemData.PermanentNumber || '-'}</Text>
      <Text>{itemData.Nationality}</Text>
      <Text>{itemData.DateOfBirth as string}</Text>

      <TouchableOpacity onPress={openBiography}>
        <Text style={styles.link}>Info...</Text>
      </TouchableOpacity>
    </View>
  );
});
