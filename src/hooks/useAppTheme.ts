import { useEffect, useState } from 'react';

import {
  Colors,
  CustomColors,
  getCustomColors,
  setCustomColors,
} from '../utils/resource/color';
import { useColorScheme } from '../ThemeProvider';

type ColorValue = string;

export const useAppTheme = () => {
  const { colorScheme } = useColorScheme();
  const [customColors, setCustomColorsState] = useState<CustomColors | null>(
    null
  );

  useEffect(() => {
    loadCustomColors();
  }, []);

  const loadCustomColors = async () => {
    const savedColors = await getCustomColors();
    if (savedColors) {
      setCustomColorsState(savedColors);
    }
  };

  const updateCustomColors = (newColors: CustomColors) => {
    setCustomColors(newColors);
    setCustomColorsState(newColors);
  };

  const getColor = (
    lightColor: ColorValue,
    darkColor: ColorValue
  ): ColorValue => {
    const mode = colorScheme === 'dark' ? 'dark' : 'light';
    const defaultColor = colorScheme === 'dark' ? darkColor : lightColor;

    if (customColors) {
      const modeColors = customColors[mode];
      if (modeColors) {
        const customColor = modeColors[lightColor as keyof typeof modeColors];
        return (customColor as ColorValue) || defaultColor;
      }
    }

    return defaultColor;
  };

  return {
    colorScheme,
    customColors,
    updateCustomColors,
    colors: {
      background: getColor(
        Colors.light.background,
        Colors.dark.background
      ) as ColorValue,
      text: {
        primary: getColor(Colors.light.text.primary, Colors.dark.text.primary),
        secondary: getColor(
          Colors.light.text.secondary,
          Colors.dark.text.secondary
        ),
        tertiary: getColor(
          Colors.light.text.tertiary,
          Colors.dark.text.tertiary
        ),
      },
      surface: {
        primary: getColor(
          Colors.light.surface.primary,
          Colors.dark.surface.primary
        ),
        secondary: getColor(
          Colors.light.surface.secondary,
          Colors.dark.surface.secondary
        ),
        tertiary: getColor(
          Colors.light.surface.tertiary,
          Colors.dark.surface.tertiary
        ),
      },
      border: {
        primary: getColor(
          Colors.light.border.primary,
          Colors.dark.border.primary
        ),
        secondary: getColor(
          Colors.light.border.secondary,
          Colors.dark.border.secondary
        ),
      },
      bottomTab: getColor(Colors.light.bottomTab, Colors.dark.bottomTab),
      tabFocus: getColor(Colors.light.tabFocus, Colors.dark.tabFocus),
      box: getColor(Colors.light.box, Colors.dark.box),
      categories: {
        BSell: getColor(
          Colors.light.categories.BSell,
          Colors.dark.categories.BSell
        ),
        classic: getColor(
          Colors.light.categories.classic,
          Colors.dark.categories.classic
        ),
        horror: getColor(
          Colors.light.categories.horror,
          Colors.dark.categories.horror
        ),
        scienceFiction: getColor(
          Colors.light.categories.scienceFiction,
          Colors.dark.categories.scienceFiction
        ),
        more: getColor(
          Colors.light.categories.more,
          Colors.dark.categories.more
        ),
      },
      explore: {
        item: getColor(Colors.light.explore.item, Colors.dark.explore.item),
      },
    },
  };
};
