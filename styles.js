import { StyleSheet } from 'react-native'

/**
 * Application Styles. In workshop, maybe don't just write down this list, use
 * a few but don't spend too much time in writing styles.
 **/
export default StyleSheet.create({
  colored: {
    color: '#A2273C',
  },
  container: {
    margin: 20,
  },
  title: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A2273C',
    color: '#FFFFFF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth:1,
    paddingHorizontal: 10,
    marginBottom:20,
  },
  row: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#202340',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temp: {
    color: "gray",
    fontWeight: 'bold',
    fontSize: 22,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 22,
    margin: 20,
  },
})
