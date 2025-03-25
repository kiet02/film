// src/screens/AnimatedTextInput.tsx
import React, {useEffect} from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import {Control} from 'react-hook-form';
import {AppInputText} from '../../../element';

const AnimatedTI = Animated.createAnimatedComponent(AppInputText);

type TAnimatedTextInput = {
  control: Control<any>;
  name: string;
  duration: number;
  label?: string;
};

export function AnimatedTextInput({
  control,
  name,
  duration,
  label,
}: TAnimatedTextInput) {
  const input = useSharedValue(0);

  useEffect(() => {
    console.log('Starting animation');
    input.value = withDelay(duration, withTiming(1, {duration: 1000}));
  });

  const inputStyle = useAnimatedStyle(() => {
    const opacity = interpolate(input.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });

  return (
    <AnimatedTI
      label={label}
      placeholder="Enter your email"
      containerStyle={[{alignSelf: 'center', margin: 10}, inputStyle]}
      control={control}
      name={name}
      rules={{required: true}} // Ví dụ: validation
    />
  );
}
