import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextProps,
} from 'react-native';

type TAppText = Omit<TextProps, 'props'> & {
  text?: string;
  styleContainer?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export function AppText({
  text,
  styleContainer,
  styleText,
  ...TextProps
}: TAppText) {
  return (
    <View style={styleContainer}>
      <Text style={styleText} {...TextProps}>
        {text}
      </Text>
    </View>
  );
}
