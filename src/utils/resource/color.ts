// colors.ts
const Colors = {
  light: {
    background: '#fcf3de',
    bottomTab: '#000000',
    tabFocus: '#ffffff',
    box: '#ffffff',
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
  },
  dark: {
    background: '#1e1e1e', // Màu nền chính (xám đậm vừa phải)
    bottomTab: '#ffffff', // Icon tab trắng trên nền đen
    tabFocus: '#0a84ff', // Màu xanh dương nổi bật khi focus
    box: '#2c2c2e', // Hộp hiển thị (xám đậm hơn nền 1 chút)
    categories: {
      BSell: '#8e8cff', // Tím nhạt (Best Seller)
      classic: '#ffb38a', // Cam sáng nhạt (Classic)
      horror: '#c2c884', // Vàng-xanh sáng (Horror)
      scienceFiction: '#7fd3ff', // Xanh lam nhạt (Sci-Fi)
      more: '#3a3a3c', // Xám trung tính (All/more)
    },
    explore: {
      item: '#3a3a3c', // Khối item nhẹ hơn nền
    },
    text: {
      primary: '#ffffff', // Văn bản chính
      secondary: '#d1d1d6', // Văn bản phụ
      tertiary: '#a1a1a1', // Văn bản thứ ba
    },
    surface: {
      primary: '#2c2c2e', // Màu bề mặt chính (card, modal)
      secondary: '#3a3a3c', // Màu bề mặt phụ
      tertiary: '#48484a', // Màu bề mặt cấp 3
    },
    border: {
      primary: '#5e5e5e', // Viền sáng rõ hơn
      secondary: '#3a3a3c',
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
  light?: Partial<ColorScheme['light']>;
  dark?: Partial<ColorScheme['dark']>;
};

const getColorMode = async (): Promise<ColorMode> => {
  const savedMode = await storage.getStringAsync(COLOR_MODE_KEY);
  return savedMode === 'dark' || savedMode === 'light' ? savedMode : 'light';
};

const setColorMode = (mode: ColorMode) => {
  storage.setStringAsync(COLOR_MODE_KEY, mode);
};

const getCustomColors = async (): Promise<CustomColors | null> => {
  const savedColors = await storage.getStringAsync(CUSTOM_COLORS_KEY);
  try {
    return savedColors ? JSON.parse(savedColors) : null;
  } catch (e) {
    return null;
  }
};

const setCustomColors = (colors: CustomColors) => {
  storage.setStringAsync(CUSTOM_COLORS_KEY, JSON.stringify(colors));
};

const getBackgroundColor = async () => {
  const mode = await getColorMode();
  const customColors = await getCustomColors();

  if (mode === 'dark') {
    return customColors?.dark?.background || Colors.dark.background;
  } else {
    return customColors?.light?.background || Colors.light.background;
  }
};

export {
  getColorMode,
  setColorMode,
  getBackgroundColor,
  getCustomColors,
  setCustomColors,
};
