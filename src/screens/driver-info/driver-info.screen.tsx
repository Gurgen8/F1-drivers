import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {
  EStackNavigationRoutes,
  TStackNavigationScreenProps,
} from '../../navigation';
import {ThemeProvider} from '../../components';
import {useAppSelector} from '../../store';

import {styles} from './styles';

export const DriverInfoScreen = ({
  navigation,
}: TStackNavigationScreenProps<EStackNavigationRoutes.DriverInfo>) => {
  const data = useAppSelector(state => state.GetDriverInfo.data);

  const backNavigation = () => {
    navigation.goBack();
  };

  return (
    <ThemeProvider>
      <TouchableOpacity style={styles.backButton} onPress={backNavigation}>
        <Text>X</Text>
      </TouchableOpacity>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Personal info</Text>
      </View>
      <View>
        {data &&
          Object.keys(data)
            .slice(0, -2)
            .map(key => (
              <Text key={key}>
                {key}: {String(data[key as keyof typeof data])}
              </Text>
            ))}
      </View>
    </ThemeProvider>
  );
};
