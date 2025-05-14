import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerRow: {
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: Platform.OS === 'android' ? 16 : 0,
  },
});
