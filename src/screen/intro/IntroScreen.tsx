import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

export function IntroScreen() {
  const progress = useSharedValue(0);
  const sizeImage = useSharedValue(0);
  const userInput = useSharedValue(0);
  const passInput = useSharedValue(0);
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
  useEffect(() => {
    progress.value = withTiming(1, { duration: 1000 });
    sizeImage.value = withDelay(500, withTiming(1, { duration: 1000 }));

    userInput.value = withDelay(700, withTiming(1, { duration: 1000 }));
    passInput.value = withDelay(900, withTiming(1, { duration: 1000 }));
  });

  const animaredImageStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(sizeImage.value, [0, 1], [200, 100]),
      height: interpolate(sizeImage.value, [0, 1], [100, 50]),
    };
  });

  const animatedBackGroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ['green', 'green']
      ),
    };
  });

  const userInputStyle = useAnimatedStyle(() => {
    return {
      opacity: userInput.value,
    };
  });
  const passInputStyle = useAnimatedStyle(() => {
    return {
      opacity: passInput.value,
    };
  });
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, []);

  return (
    <LottieView
      ref={animationRef}
      source={require('../../utils/image/Animation - 1742292983807.json')}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 200,
  },
  input: {
    textAlign: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'gray',
    marginTop: 20,
    borderRadius: 30,
  },
});
