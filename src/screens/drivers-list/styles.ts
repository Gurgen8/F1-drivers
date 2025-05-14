import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    height: Dimensions.get('window').height - 180,
  },
});
