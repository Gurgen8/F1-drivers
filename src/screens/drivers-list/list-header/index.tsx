import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

export const ListHeader: FC = () => (
  <View style={styles.row}>
    <Text style={styles.header}>Driver Name</Text>
    <Text style={styles.header}>{'Permanent \nNumber'}</Text>
    <Text style={styles.header}>Nationality</Text>
    <Text style={styles.header}>DOB</Text>
    <Text style={styles.header}>Bio.</Text>
  </View>
);
