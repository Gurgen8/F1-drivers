import React, {FC, memo} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {TThemeProviderProps} from './types';

export const ThemeProvider: FC<TThemeProviderProps> = memo(({children}) => (
  <SafeAreaView style={styles.wrapper}>
    <View style={styles.root}>{children}</View>
  </SafeAreaView>
));
