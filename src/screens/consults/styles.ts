import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 32
  },

  contentContainer: {
    width: '100%',
    paddingHorizontal: 16
  },

  title: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700'
  },

  subtitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    marginVertical: 24
  },

  foodListContainer: {
    paddingVertical: 12
  },

  foodListItem: {
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    marginBottom: 16
  },

  emptyText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 24,
    marginTop: 24,
    marginBottom: 48,
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
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
  },

  weightInputContainer: {
    flex: 1,
    width: '100%',
  },

  addButton: {
    backgroundColor: '#E7E4DF',
    padding: 16,
    borderRadius: 8,
    marginLeft: 16
  },

  submitButton: {
    marginTop: 24,
    backgroundColor: '#E7E4DF',
    padding: 16,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center'
  },

  submitButtonText: {
    fontWeight: '700'
  }
});
