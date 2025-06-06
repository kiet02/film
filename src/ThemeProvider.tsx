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
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import { Dimensions, StatusBar, StyleSheet, View } from 'react-native';
import {
  SharedValue,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ColorMode, getColorMode, setColorMode } from './utils/resource/color';

const { width, height } = Dimensions.get('screen');
const corners = [vec(0, 0), vec(width, 0), vec(width, height), vec(0, height)];
const wait = async (number: number) => {
  return await new Promise(resolve => setTimeout(resolve, number));
};

interface ColorScheme {
  active: boolean;
  overlay1: SkImage | null;
  overlay2: SkImage | null;
  colorScheme: string | null;
  statusBar: string | null;
}

interface ColorSchemeContextP extends ColorScheme {
  ref: RefObject<View>;
  dispatch: (scheme: ColorScheme) => void;
  transition: SharedValue<number>;
  circle: SharedValue<{ x: number; y: number; r: number }>;
}

const defaultValue: ColorScheme = {
  active: false,
  overlay1: null,
  overlay2: null,
  colorScheme: null,
  statusBar: null,
};

const ColorSchemeContext = createContext<ColorSchemeContextP | null>(null);
const ColorSchemeReducer = (_: ColorScheme, colorScheme: ColorScheme) => {
  return colorScheme;
};

export const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (!ctx) {
    console.error('Context is null - component not wrapped in provider');
    throw new Error('useColorScheme must be used within ColorSchemeProvider');
  }

  const { dispatch, ref, colorScheme, circle, transition, active } = ctx;
  const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
  const toggle = async (x: number, y: number) => {
    console.log('Toggle started:', x, y, 'current scheme:', colorScheme);
    try {
      const overlay1 = await makeImageFromView(ref);

      const r = Math.max(...corners.map(corner => dist(corner, { x, y })));
      circle.value = { x, y, r };

      dispatch({
        active: true,
        overlay1,
        overlay2: null,
        colorScheme,
        statusBar: null,
      });

      await wait(100);
      dispatch({
        active: true,
        overlay1,
        overlay2: null,
        colorScheme: newColorScheme,
        statusBar: newColorScheme,
      });
      await wait(100);

      const overlay2 = await makeImageFromView(ref);

      dispatch({
        active: true,
        overlay1,
        overlay2,
        colorScheme: newColorScheme,
        statusBar: newColorScheme,
      });

      transition.value = 0;
      transition.value = withTiming(1, { duration: 650 });

      await wait(1000);
      setColorMode(newColorScheme as ColorMode);
      dispatch({
        active: false,
        overlay1: null,
        overlay2: null,
        colorScheme: newColorScheme,
        statusBar: newColorScheme,
      });
    } catch (err) {
      console.error('Failed to make image from view:', err);
    }
  };

  return { toggle, colorScheme, active };
};

export const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
  const [{ active, overlay1, overlay2, colorScheme, statusBar }, dispatch] =
    useReducer(ColorSchemeReducer, defaultValue);

  const ref = useRef<View>(null);
  const circle = useSharedValue({ x: 0, y: 0, r: 0 });
  const transition = useSharedValue(0);

  // Fixed: Use useDerivedValue properly without accessing .value during render
  const r = useDerivedValue(() => {
    return mix(transition.value, 0, circle.value.r);
  });

  useEffect(() => {
    const loadInitialMode = async () => {
      const savedMode = await getColorMode();
      console.log('Initial mode:', savedMode);

      dispatch({
        active: false,
        overlay1: null,
        overlay2: null,
        colorScheme: savedMode,
        statusBar: savedMode,
      });
    };
    loadInitialMode();
  }, []);

  // Nếu mode chưa load, không render gì cả
  if (!colorScheme) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} collapsable={false} ref={ref}>
        <StatusBar
          barStyle={statusBar === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        <ColorSchemeContext.Provider
          value={{
            dispatch,
            active,
            overlay1,
            overlay2,
            ref,
            colorScheme,
            circle,
            transition,
            statusBar,
          }}
        >
          {children}
        </ColorSchemeContext.Provider>
      </View>

      <View
        style={StyleSheet.absoluteFill}
        collapsable={false}
        pointerEvents={!active ? 'none' : undefined}
      >
        <Canvas style={{ flex: 1 }}>
          {overlay1 && <Image image={overlay1} width={width} height={height} />}

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
    </View>
  );
};
