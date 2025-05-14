import {StyleSheet} from 'react-native';
import {Colors} from '../../../ui-kit/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  link: {
    color: Colors.BLUE,
    textDecorationLine: 'underline',
    fontSize: 12,
  },
});
