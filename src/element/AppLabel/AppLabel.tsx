/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';

type TAppLabel = {
  name: string;
  containerLabel?: ViewStyle;
  labelStyle?: TextStyle;
};

export function AppLabel({ name, containerLabel, labelStyle }: TAppLabel) {
  const { colors } = useAppTheme();

  return (
    <View style={containerLabel}>
      <Text style={[{ color: colors.text.primary }, labelStyle]}>{name}</Text>
    </View>
  );
}
