import React from 'react';
import { View, Text } from 'react-native';
import styles from './RoundIndicator.styles';

const RoundIndicator = ({ currentRound, totalRounds }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Round {currentRound} of {totalRounds}
      </Text>
    </View>
  );
};

export default RoundIndicator;
