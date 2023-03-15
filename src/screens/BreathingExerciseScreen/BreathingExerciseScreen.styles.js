import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5d5d5d',
  },
  exitButton: {
    backgroundColor: '#8ac4d0',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  exitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default styles;
