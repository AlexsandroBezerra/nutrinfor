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
    marginVertical: 24
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#897A5F',
    borderWidth: 3,
    borderRadius: 5,
    padding: 7,
    margin: 5,
    backgroundColor: '#E7E4DF'
  },

  itemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#293845'
  },

  itemValue: {
    fontSize: 16,
    fontWeight: '500'
  }
});
