import { useEffect, useState } from 'react';
import { useTheme } from '../ThemeProvider';
import {
  Colors,
  CustomColors,
  getCustomColors,
  setCustomColors,
} from '../utils/resource/color';

type ColorValue = string;

export const useAppTheme = () => {
  const { isDarkMode } = useTheme();
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
    if (customColors) {
      const mode = isDarkMode ? 'dark' : 'light';
      const customColor =
        mode === 'dark'
          ? customColors.dark[lightColor as keyof typeof customColors.dark]
          : customColors.light[lightColor as keyof typeof customColors.light];
      return (
        (customColor as ColorValue) || (isDarkMode ? darkColor : lightColor)
      );
    }
    return isDarkMode ? darkColor : lightColor;
  };

  return {
    isDarkMode,
    customColors,
    updateCustomColors,
    colors: {
      background: getColor(
        Colors.background,
        Colors.dark.background
      ) as ColorValue,
      text: {
        primary: getColor(Colors.text.primary, Colors.dark.text.primary),
        secondary: getColor(Colors.text.secondary, Colors.dark.text.secondary),
        tertiary: getColor(Colors.text.tertiary, Colors.dark.text.tertiary),
      },
      surface: {
        primary: getColor(Colors.surface.primary, Colors.dark.surface.primary),
        secondary: getColor(
          Colors.surface.secondary,
          Colors.dark.surface.secondary
        ),
        tertiary: getColor(
          Colors.surface.tertiary,
          Colors.dark.surface.tertiary
        ),
      },
      border: {
        primary: getColor(Colors.border.primary, Colors.dark.border.primary),
        secondary: getColor(
          Colors.border.secondary,
          Colors.dark.border.secondary
        ),
      },
      bottomTab: getColor(Colors.bottomTab, Colors.dark.bottomTab),
      tabFocus: getColor(Colors.tabFocus, Colors.dark.tabFocus),
      categories: {
        BSell: getColor(Colors.categories.BSell, Colors.dark.categories.BSell),
        classic: getColor(
          Colors.categories.classic,
          Colors.dark.categories.classic
        ),
        horror: getColor(
          Colors.categories.horror,
          Colors.dark.categories.horror
        ),
        scienceFiction: getColor(
          Colors.categories.scienceFiction,
          Colors.dark.categories.scienceFiction
        ),
        more: getColor(Colors.categories.more, Colors.dark.categories.more),
      },
      explore: {
        item: getColor(Colors.explore.item, Colors.dark.explore.item),
      },
    },
  };
};
