import React, {useEffect} from 'react';
import {View} from 'react-native';

import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {AppButton, AppTextTouchable} from '../../../element';

type TAnimatedButton = {duration: number; onPressLogin: () => void,onPressRegister:() => void};

export function AnimatedButton({duration, onPressLogin,onPressRegister}: TAnimatedButton) {
  const button = useSharedValue(0);

  useEffect(() => {
    button.value = withDelay(duration, withTiming(1, {duration: 1000}));
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(button.value, [0, 1], [0, 1]),
    };
  });
  return (
    <View>
      <AppButton
        title="Login"
        TouchableType="TouchableOpacity"
        ButtonStyle={{width: 200, alignSelf: 'center'}}
        onPress={onPressLogin}
      />
      <AppTextTouchable
        text="Register here"
        onPress={onPressRegister}
      />
    </View>
  );
}
