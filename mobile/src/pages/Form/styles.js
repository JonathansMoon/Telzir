import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
  iconContainer: {
    top: 15,
    right: 15,
  },
});

export const formStyles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
  button: {
    backgroundColor: '#5E72E4',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  small: {
    marginTop: 5,
    fontSize: 12,
    color: '#c1c1c1',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errors: {
    height: 20,
  },
  errorsText: {
    paddingLeft: 15,
    color: 'red',
  },
});
