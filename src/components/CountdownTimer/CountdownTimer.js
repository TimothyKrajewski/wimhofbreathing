import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './CountdownTimer.styles';

const CountdownTimer = ({ maxTime, onComplete }) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const timerId = useRef(null);

  useEffect(() => {
    if (!isTimerActive) {
      return;
    }

    timerId.current = setInterval(() => {
      setSecondsElapsed(secondsElapsed + 1);
    }, 1000);

    return () => clearInterval(timerId.current);
  }, [isTimerActive, secondsElapsed]);

  const handleTouch = () => {
    setIsTimerActive(false);
    clearInterval(timerId.current);
    onComplete(secondsElapsed);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleTouch}>
      <Text style={styles.text}>Tap to move to the next round: {secondsElapsed}s</Text>
    </TouchableOpacity>
  );
};

export default CountdownTimer;
