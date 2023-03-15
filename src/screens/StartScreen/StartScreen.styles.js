import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buyMeACoffeeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5d5d5d',
    marginTop: 20,
  },
  startButton: {
    backgroundColor: '#5d5d5d',
    borderRadius: 5,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 20,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default styles;
