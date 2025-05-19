import React from 'react';
import { Text, TextStyle, View, ViewStyle, StyleProp } from 'react-native';
import { useAppTheme } from '../hooks/useAppTheme';

export interface AppTextProps {
  text?: string;
  styleText?: StyleProp<TextStyle>;
  styleContainer?: StyleProp<ViewStyle>;
  numberOfLines?: number;
}

export function AppText({
  text,
  styleText,
  styleContainer,
  numberOfLines,
}: AppTextProps) {
  const { colors } = useAppTheme();

  return (
    <View style={styleContainer}>
      <Text
        style={[{ color: colors.text.primary }, styleText]}
        numberOfLines={numberOfLines}
      >
        {text}
      </Text>
    </View>
  );
}
