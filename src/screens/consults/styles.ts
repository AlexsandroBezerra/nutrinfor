import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32
  },

  contentContainer: {
    width: '100%',
    paddingHorizontal: 16
  },

  subtitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 24
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 8,
    paddingHorizontal: 8
  },

  itemTitle: {
    fontSize: 16
  },

  itemValue: {
    fontSize: 16,
    fontWeight: '500'
  }
});
