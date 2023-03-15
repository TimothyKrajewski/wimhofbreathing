import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderWidth: 5,
    borderColor: '#FFC0CB',
    borderRadius: 1000, // A large value to create a perfect circle
  },
  breaths: {
    position: 'absolute',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFC0CB',
  },
});

export default styles;
