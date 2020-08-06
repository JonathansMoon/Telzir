import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#5E72E4',
    fontSize: 50,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
    padding: 30,
  },
  cardBlack: {
    marginTop: 20,
    backgroundColor: '#000',
    fontSize: 50,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
    padding: 30,
  },
  titulo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tituloText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    paddingTop: 20,
  },
  bodyText: {
    color: 'white',
    fontSize: 16,
  },
  textBold: {
    fontWeight: 'bold',
  },
});
