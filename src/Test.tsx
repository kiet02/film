import React, {
  createContext,
  useContext,
  RefObject,
  useCallback,
  useRef,
  useReducer,
} from 'react';
import { setColorMode } from './utils/resource/color';
import type { ColorMode } from './utils/resource/color';
import {
  Appearance,
  ColorSchemeName,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import {
  Canvas,
  Circle,
  dist,
  Image,
  ImageShader,
  makeImageFromView,
  mix,
  SkImage,
  vec,
} from '@shopify/react-native-skia';
import {
  SharedValue,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface ColorScheme {
  active: boolean;
  statusBarStyle: ColorSchemeName;
  colorScheme: ColorSchemeName;
  overlay1: SkImage | null;
  overlay2: SkImage | null;
}

interface ColorSchemeContext extends ColorScheme {
  ref: RefObject<View>;
  transition: SharedValue<number>;
  circle: SharedValue<{ x: number; y: number; r: number }>;
  dispatch: (scheme: ColorScheme) => void;
}

const { width, height } = Dimensions.get('screen');

const ColorSchemeContext = createContext<ColorSchemeContext | null>(null);

const colorSchemeReducer = (_: ColorScheme, colorScheme: ColorScheme) => {
  return colorScheme;
};

const corners = [vec(0, 0), vec(width, 0), vec(width, height), vec(0, height)];
const wait = async (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

const defaultValue: ColorScheme = {
  active: false,
  statusBarStyle: Appearance.getColorScheme() === 'light' ? 'dark' : 'light',
  colorScheme: Appearance.getColorScheme() ?? 'light',
  overlay1: null,
  overlay2: null,
};

export const useTheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (ctx === null) {
    throw new Error('No ColorScheme context context found');
  }
  const { colorScheme, dispatch, ref, transition, circle, active } = ctx;

  const toggle = useCallback(
    async (x: number, y: number, newColorScheme: ColorSchemeName) => {
      setColorMode(newColorScheme as ColorMode);
      dispatch({
        active: true,
        colorScheme,
        overlay1: null,
        overlay2: null,
        statusBarStyle: newColorScheme,
      });

      // 0. Define the circle and its maximum radius
      const r = Math.max(...corners.map(corner => dist(corner, { x, y })));
      circle.value = { x, y, r };

      // 1. Take the screenshot
      if (ref.current) {
        const overlay1 = await makeImageFromView(ref);
        dispatch({
          active: true,
          colorScheme,
          overlay1,
          overlay2: null,
          statusBarStyle: newColorScheme,
        });

        // 2. Switch to dark mode and wait for render
        await wait(16);
        dispatch({
          active: true,
          colorScheme: newColorScheme,
          overlay1,
          overlay2: null,
          statusBarStyle: newColorScheme,
        });

        // 3. Take screenshot again
        await wait(16);
        const overlay2 = await makeImageFromView(ref);
        dispatch({
          active: true,
          colorScheme: newColorScheme,
          overlay1,
          overlay2,
          statusBarStyle: newColorScheme,
        });

        // 4. Transition the circle effect
        transition.value = 0;
        transition.value = withTiming(1, { duration: 650 });
        await wait(650);
        dispatch({
          active: false,
          colorScheme: newColorScheme,
          overlay1: null,
          overlay2: null,
          statusBarStyle: newColorScheme === 'light' ? 'dark' : 'light',
        });
      }
    },
    [circle, colorScheme, dispatch, ref, transition]
  );

  return { colorScheme, toggle, active };
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const circle = useSharedValue({ x: 0, y: 0, r: 0 });
  const transition = useSharedValue(0);
  const ref = useRef(null);
  const [
    { colorScheme, overlay1, overlay2, active, statusBarStyle },
    dispatch,
  ] = useReducer(colorSchemeReducer, defaultValue);

  const r = useDerivedValue(() => mix(transition.value, 0, circle.value.r));

  return (
    <View style={{ flex: 1 }}>
      <View ref={ref} style={{ flex: 1 }} collapsable={false}>
        <ColorSchemeContext.Provider
          value={{
            active,
            colorScheme,
            overlay1,
            overlay2,
            dispatch,
            ref,
            transition,
            circle,
            statusBarStyle,
          }}
        >
          {children}
        </ColorSchemeContext.Provider>
      </View>
      <Canvas style={StyleSheet.absoluteFill} pointerEvents={'none'}>
        <Image image={overlay1} x={0} y={0} width={width} height={height} />
        {overlay2 && (
          <Circle c={circle} r={r}>
            <ImageShader
              image={overlay2}
              x={0}
              y={0}
              width={width}
              height={height}
              fit="cover"
            />
          </Circle>
        )}
      </Canvas>
    </View>
  );
};
