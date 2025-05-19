const Colors = {
  background: '#fcf3de',
  bottomTab: '#000000',
  tabFocus: '#ffffff',
  categories: {
    BSell: '#e3d6fb',
    classic: '#faded7',
    horror: '#f9f7da',
    scienceFiction: '#d8f2fb',
    more: '#f7f7f7',
  },
  explore: {
    item: '#f7f7f7',
  },
  text: {
    primary: '#000000',
    secondary: '#4d4d4d',
    tertiary: '#808080',
  },
  surface: {
    primary: '#ffffff',
    secondary: '#f7f7f7',
    tertiary: '#e6e6e6',
  },
  border: {
    primary: '#e6e6e6',
    secondary: '#f7f7f7',
  },
  dark: {
    background: '#121212',
    bottomTab: '#ffffff',
    tabFocus: '#000000',
    categories: {
      BSell: '#2a1b6b',
      classic: '#6b2d1f',
      horror: '#4b4a2d',
      scienceFiction: '#1b4d6b',
      more: '#2d2d2d',
    },
    explore: {
      item: '#2d2d2d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
      tertiary: '#808080',
    },
    surface: {
      primary: '#1e1e1e',
      secondary: '#2d2d2d',
      tertiary: '#404040',
    },
    border: {
      primary: '#404040',
      secondary: '#2d2d2d',
    },
  },
} as const;

type ColorScheme = typeof Colors;
type Theme = keyof ColorScheme;
type ThemeColors<T extends Theme> = ColorScheme[T];

export { Colors };
export type { ColorScheme, Theme, ThemeColors };

import MMKVStorage from 'react-native-mmkv-storage';

const storage = new MMKVStorage.Loader().initialize();

const COLOR_MODE_KEY = 'colorMode';
const CUSTOM_COLORS_KEY = 'customColors';

export type ColorMode = 'light' | 'dark';

export type CustomColors = {
  light: Partial<Omit<ColorScheme, 'dark'>>;
  dark: Partial<ColorScheme['dark']>;
};

const getColorMode = async (): Promise<ColorMode> => {
  const savedMode = await storage.getStringAsync(COLOR_MODE_KEY);
  return (savedMode as ColorMode) || 'light';
};

const setColorMode = (mode: ColorMode) => {
  storage.setStringAsync(COLOR_MODE_KEY, mode);
};

const getCustomColors = async (): Promise<CustomColors | null> => {
  const savedColors = await storage.getStringAsync(CUSTOM_COLORS_KEY);
  return savedColors ? JSON.parse(savedColors) : null;
};

const setCustomColors = (colors: CustomColors) => {
  storage.setStringAsync(CUSTOM_COLORS_KEY, JSON.stringify(colors));
};

const getBackgroundColor = async () => {
  const mode = await getColorMode();
  const customColors = await getCustomColors();
  if (customColors) {
    return mode === 'dark'
      ? customColors.dark?.background || Colors.dark.background
      : customColors.light?.background || Colors.background;
  }
  return mode === 'dark' ? Colors.dark.background : Colors.background;
};

export {
  getColorMode,
  setColorMode,
  getBackgroundColor,
  getCustomColors,
  setCustomColors,
};
