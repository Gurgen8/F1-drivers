import {StyleSheet} from 'react-native';
import {Colors} from '../../../ui-kit/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: Colors.GRAY,
    marginBottom: 4,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
});
