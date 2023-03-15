import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import ConfigForm from '../../components/ConfigForm/ConfigForm';
import styles from './StartScreen.styles';
import { Linking } from 'react-native';

const defaultConfig = {
  rounds: 3,
  breathsPerRound: 30,
  animationSpeed: 'normal',
  retentionTime: 0,
};

const StartScreen = ({ navigation }) => {
  const [numberOfRounds, setNumberOfRounds] = useState(defaultConfig.rounds);
  const [breathsPerRound, setBreathsPerRound] = useState(defaultConfig.breathsPerRound);
  const [animationSpeed, setAnimationSpeed] = useState(defaultConfig.animationSpeed);

  const handleStart = () => {
    navigation.navigate('BreathingExercise', {
      numberOfRounds,
      breathsPerRound,
      animationSpeed,
    });
  };

  const handleBuyMeACoffeePress = () => {
    Linking.openURL('https://www.buymeacoffee.com/cryjuicekey');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Ice Man Breathing</Text>
      <ConfigForm 
            setAnimationSpeed={setAnimationSpeed}
            setNumberOfRounds={setNumberOfRounds}
            setBreathsPerRound={setBreathsPerRound}
            onStart={handleStart}
            config={{rounds: numberOfRounds, breathsPerRound: breathsPerRound, animationSpeed: animationSpeed}} 
            />
      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBuyMeACoffeePress}>
        <Text style={styles.buyMeACoffeeText}>☃️Buy me a coffee</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default StartScreen;
