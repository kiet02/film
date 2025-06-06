import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import Icon from '../element/AppIcon/item/Icon';
import { View } from 'react-native';
import { useAppTheme } from '../hooks/useAppTheme';
import { useColorScheme } from './ThemeTest';

export const ColorSchemeButton = () => {
  const { colors } = useAppTheme();
  const { toggle, active } = useColorScheme();
  const tap = Gesture.Tap()
    .runOnJS(true)
    .onStart(e => {
      if (!active) {
        toggle(e.absoluteX, e.absoluteY);
      }
    });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}
    >
      <GestureDetector gesture={tap}>
        <Icon name={'Sun'} color={colors.text.primary} />
      </GestureDetector>
    </View>
  );
};
