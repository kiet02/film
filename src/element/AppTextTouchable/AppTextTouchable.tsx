/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';

type TAppTextTouchable = Omit<TouchableOpacityProps, 'style'> & {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export function AppTextTouchable({
  text,
  textStyle,
  onPress,
  containerStyle,
  ...touchableProps
}: TAppTextTouchable) {
  return (
    <Animated.View style={containerStyle}>
      <TouchableOpacity {...touchableProps} onPress={onPress}>
        <Text
          style={[
            {
              fontStyle: 'italic',
              color: '#0f2c75',
              alignSelf: 'center',
              marginTop: 10,
            },
            textStyle,
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
