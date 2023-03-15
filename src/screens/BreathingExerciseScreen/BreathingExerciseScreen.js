import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Circle from '../../components/Circle/Circle';
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';
import RoundIndicator from '../../components/RoundIndicator/RoundIndicator';
import styles from './BreathingExerciseScreen.styles';

const BreathingExerciseScreen = ({ route, navigation }) => {
  const { numberOfRounds, breathsPerRound, animationSpeed } = route.params;

  const [currentRound, setCurrentRound] = useState(1);
  const [currentBreath, setCurrentBreath] = useState(breathsPerRound);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const circleRef = useRef(null);

  const handleCirclePress = () => {
    if (isTimerActive) {
      return;
    }

    if (currentBreath > 1) {
      setCurrentBreath(currentBreath - 1);
    } else {
      setIsTimerActive(true);
    }
  };

  const handleBreathsFinished = () => {
    setIsTimerActive(true);
  };


  const handleTimerComplete = () => {
    if (currentRound < numberOfRounds) {
      setCurrentRound(currentRound + 1);
      setCurrentBreath(breathsPerRound);
      circleRef.current.animateBreathing(); // Restart the animation
    } else {
      navigation.navigate('Start');
    }
    setIsTimerActive(false);
  };
  
  return (
    <View style={styles.container}>
      <RoundIndicator currentRound={currentRound} totalRounds={numberOfRounds} />
      <TouchableOpacity onPress={handleCirclePress} activeOpacity={1}>
        <Circle
          breaths={currentBreath}
          onBreathsFinished={handleBreathsFinished}
          ref={circleRef}
          animationSpeed={animationSpeed} 
        />
      </TouchableOpacity>
      {isTimerActive && (
        <CountdownTimer onComplete={handleTimerComplete} />
      )}
    </View>
  );
};

export default BreathingExerciseScreen;
