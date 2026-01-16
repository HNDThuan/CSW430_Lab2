import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const GAP = 15;
const BTN = (width - GAP * 5) / 4;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingHorizontal: GAP,
    paddingBottom: 10,
  },

  display: {
    fontSize: 48,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: GAP,
  },

  button: {
    width: BTN,
    height: BTN,
    borderRadius: BTN / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  numberText: {
    fontSize: 22,
    color: '#000',
  },
  operatorButton: {
    backgroundColor: '#f2f2f2',
  },

  operatorText: {
    fontSize: 26,
    color: '#ff9500',
    fontWeight: 'bold',
  },

  equalButton: {
    backgroundColor: '#ff9500',
  },

  equalText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },

  zeroButton: {
    width: BTN * 2 + GAP,
    borderRadius: BTN / 2,
  },

  clearButton: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    paddingVertical: 12,
    marginTop: 10,
  },

  clearText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
});
