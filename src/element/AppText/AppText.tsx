import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';

interface AppTextProps {
  text?: string;
  styleText?: TextStyle;
  numberOfLines?: number;
}

export function AppText({ text, styleText, numberOfLines }: AppTextProps) {
  const { colors } = useAppTheme();

  return (
    <Text
      style={[{ color: colors.text.primary }, styleText]}
      numberOfLines={numberOfLines}
    >
      {text}
    </Text>
  );
}
