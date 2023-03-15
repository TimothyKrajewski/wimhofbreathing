import React from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './Circle.styles';

const ANIMATION_SPEEDS = {
  slow: 6000,
  normal: 4000,
  fast: 2000,
};

class Circle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breaths: this.props.breaths,
      animatedValue: new Animated.Value(0),
      shouldDecrementBreaths: false,
    };

    this.animationListener = null;
  }

  componentDidMount() {
    this.animateBreathing();
    this.addAnimationListener();
  }

  componentWillUnmount() {
    this.removeAnimationListener();
  }

  stopAnimation() {
    this.state.animatedValue.stopAnimation();
  }

  animateBreathing() {
    const { animatedValue } = this.state;
    const { animationSpeed } = this.props;
    const duration = ANIMATION_SPEEDS[animationSpeed] || ANIMATION_SPEEDS.normal;

    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: duration / 2,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: duration / 2,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }

  addAnimationListener() {
    this.animationListener = this.state.animatedValue.addListener(({value}) => {
      if (value <= 0.01) {
        if(this.state.shouldDecrementBreaths) {
          this.decrementBreaths();
          this.setState({ shouldDecrementBreaths: false  });
        }
      }
      if (value >= 1) {
        this.setState({ shouldDecrementBreaths: true });
      }
    });
  }

  removeAnimationListener() {
    this.state.animatedValue.removeListener(this.animationListener);
  }

  decrementBreaths() {
    if (this.props.breaths > 0) {
      this.props.breaths--;
      if (this.props.breaths === 0) {
        this.stopAnimation();
        if (this.props.onBreathsFinished) {
          this.props.onBreathsFinished();
        }
      }
    }
  }

  render() {
    const { animatedValue } = this.state;
    let size = 250;

    const circleSize = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [100, size * 1.5],
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.circle,
            {
              width: circleSize,
              height: circleSize
            },
          ]}
        ></Animated.View>
        <Text style={styles.breaths}>{this.props.breaths}</Text>
      </View>
    );
  }
}

export default Circle;
