import {
  Canvas,
  Circle,
  dist,
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
import { Dimensions, StyleSheet, View } from 'react-native';
import {
  SharedValue,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('screen');
const corners = [vec(0, 0), vec(width, 0), vec(width, height), vec(0, height)];

interface ColorScheme {
  active: boolean;
  overlay1: SkImage | null;
  overlay2: SkImage | null;
  colorScheme: string | null;
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
  colorScheme: 'light',
};
const wait = async (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

const ColorSchemeContext = createContext<ColorSchemeContextP | null>(null);
const ColorSchemeReducer = (_: ColorScheme, colorScheme: ColorScheme) => {
  console.log('ColorScheme updated:', colorScheme);
  return colorScheme;
};

export const useColorScheme = () => {
  console.log('useColorScheme called');
  const ctx = useContext(ColorSchemeContext);

  if (!ctx) {
    console.error('Context is null - component not wrapped in provider');
    throw new Error('useColorScheme must be used within ColorSchemeProvider');
  }

  console.log('Context found:', ctx);
  const { dispatch, ref, colorScheme, circle, transition, active } = ctx;
  const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';

  const toggle = async (x: number, y: number) => {
    console.log('Toggle started:', x, y, 'current scheme:', colorScheme);
    try {
      const overlay1 = await makeImageFromView(ref);
      console.log('Overlay created:', overlay1);

      const r = Math.max(...corners.map(corner => dist(corner, { x, y })));
      circle.value = { x, y, r };

      dispatch({
        active: true,
        overlay1: null,
        overlay2: null,
        colorScheme,
      });
      transition.value = 0;
      transition.value = withTiming(1, { duration: 650 });
      // Use Promise-based setTimeout instead of callback
      await wait(16);

      dispatch({
        active: false,
        overlay1: null,
        overlay2: null,
        colorScheme: newColorScheme,
      });
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (err) {
      console.error('Failed to make image from view:', err);
    }
  };

  return { toggle, colorScheme, active };
};

export const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
  const [{ active, overlay1, overlay2, colorScheme }, dispatch] = useReducer(
    ColorSchemeReducer,
    defaultValue
  );

  const ref = useRef<View>(null);
  const circle = useSharedValue({ x: 0, y: 0, r: 0 });
  const transition = useSharedValue(0);

  // Fixed: Use useDerivedValue properly without accessing .value during render
  const r = useDerivedValue(() => {
    return mix(transition.value, 0, circle.value.r);
  });

  useEffect(() => {
    console.log('State changed:', {
      active,
      overlay1: !!overlay1,
      colorScheme,
    });
  }, [active, overlay1, colorScheme]);

  const contextValue = {
    dispatch,
    active,
    overlay1,
    overlay2,
    colorScheme,
    ref,
  };

  console.log('Providing context value:', contextValue);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} collapsable={false} ref={ref}>
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
          }}
        >
          {children}
        </ColorSchemeContext.Provider>
      </View>

      <View
        style={StyleSheet.absoluteFill}
        collapsable={false}
        pointerEvents="none"
      >
        <Canvas style={{ flex: 1 }}>
          {overlay1 && <Circle c={circle} r={r} color="blue" />}
        </Canvas>
      </View>
    </View>
  );
};
