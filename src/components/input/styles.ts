import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    paddingVertical: 18,
    paddingHorizontal: 23,
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    borderColor: '#11142D',
    borderWidth: 1,
    color: '#11142D',
    width: '100%',
    minHeight: 64,
  },
  inputFocusState: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#3740FE',
  },
  labelText: {
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '700',
    color: '#808191'
  }
});
