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
    marginBottom: 16,
  },

  signUpText: {
    color: 'black',
    marginTop: 32,
    textAlign: 'center',
    fontSize: 14,
  },

  signUpLink: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 4,
    textDecorationLine: 'underline'
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
