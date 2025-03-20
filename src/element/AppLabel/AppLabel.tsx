/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ViewStyle, StyleProp, TextStyle} from 'react-native';

type TAppLabel = {
  name?: string;
  containerLabel?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};
export function AppLabel({name, containerLabel, labelStyle}: TAppLabel) {
  return (
    <View style={containerLabel}>
      <Text style={[{color: 'black'}, labelStyle]}>{name}</Text>
    </View>
  );
}
