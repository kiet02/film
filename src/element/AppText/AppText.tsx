import React from 'react';
import {View, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';

type TAppText = {
  text?: string;
  styleContainer?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export function AppText({text, styleContainer, styleText}: TAppText) {
  return (
    <View style={styleContainer}>
      <Text style={styleText}>{text}</Text>
    </View>
  );
}
