import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },

  textInput: {
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#C5CED6', 
    padding: 7,
    borderRadius: 3,
  },

  signText: {
    color: 'black',
    marginTop: 25,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14
  },

  signIn: {
    width: '100%',
    height: 45,
    display: 'flex',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#897a5f',
    borderRadius: 5,
  },

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
