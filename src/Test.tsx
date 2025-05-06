import { BlurMask, Canvas, Path, Skia } from '@shopify/react-native-skia';
import React, { useMemo } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';

const CanvaSizeW = 70;
const CanvaSizeR = CanvaSizeW / 3.5;

const SVGLoader = () => {
  const rotation = useSharedValue(0);

  // Xoay vô hạn
  rotation.value = withRepeat(
    withTiming(360, {
      duration: 1000,
      easing: Easing.linear,
    }),
    -1,
    false
  );

  // Style xoay
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${rotation.value}deg`,
      },
    ],
  }));

  // Giá trị động cho start
  const startValue = useDerivedValue(() =>
    interpolate(rotation.value, [0, 180, 360], [0.3, 0.6, 0.3])
  );

  // Tạo path vòng tròn
  const CirclePath = useMemo(() => {
    const skiaPath = Skia.Path.Make();
    skiaPath.addCircle(CanvaSizeW / 2, CanvaSizeW / 2, CanvaSizeR);
    return skiaPath;
  }, []);

  return (
    <Modal transparent animationType="fade" statusBarTranslucent>
      {/* Layer mờ nền */}
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.blurBackground} />

        {/* Layer loader không bị mờ */}
        <Animated.View style={[styles.loaderWrapper, animatedStyle]}>
          <Canvas style={{ width: CanvaSizeW, height: CanvaSizeW }}>
            <Path
              path={CirclePath}
              color="blue"
              style="stroke"
              strokeWidth={8}
              start={startValue}
              end={1}
              strokeCap="round"
            >
              <BlurMask blur={2} style="solid" />
            </Path>
          </Canvas>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  blurBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  loaderWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});

export default SVGLoader;
