import React from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import styles from './ConfigForm.styles';
import { Picker } from '@react-native-picker/picker';

const ConfigForm = ({ config, setNumberOfRounds, setBreathsPerRound, setAnimationSpeed }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <Text style={styles.label}>Rounds: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={value => setNumberOfRounds(parseInt(value ? value : 1))}
          value={config.rounds.toString()}
          blurOnSubmit={true} // Add this line to blur the input after submission
        />
      </View>
      <View style={styles.inputRow}>
        <Text style={styles.label}>Breaths: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={value => setBreathsPerRound(parseInt(value ? value : 1))}
          value={config.breathsPerRound.toString()}
          blurOnSubmit={true} // Add this line to blur the input after submission
        />
      </View>
      <View style={styles.inputSpeedRow}>
        <Text style={styles.label}>Speed: </Text>
        <Picker
          style={styles.picker}
          selectedValue={config.animationSpeed}
          onValueChange={value => setAnimationSpeed(value)}
        >
          <Picker.Item label="Slow" value="slow" />
          <Picker.Item label="Normal" value="normal" />
          <Picker.Item label="Fast" value="fast" />
        </Picker>
      </View>
    </View>
  );
};

export default ConfigForm;
