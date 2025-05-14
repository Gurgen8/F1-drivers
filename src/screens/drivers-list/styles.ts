import {Dimensions, Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: Platform.OS === 'android' ? 16 : 0,
  },
  list: {
    height:
      Dimensions.get('window').height - (Platform.OS === 'ios' ? 180 : 100),
  },
});
