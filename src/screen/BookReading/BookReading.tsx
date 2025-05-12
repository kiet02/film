import React, { useCallback, useRef, useMemo, useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Slider from '@react-native-community/slider';

export function BookReading() {
  const sheetRef = useRef<BottomSheet>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['30%', '40%'], []);

  const [fontSize, setFontSize] = useState(16);
  const [bgColor, setBgColor] = useState('#ffffff');

  const handleSheetChange = () => {
    bottomSheetRef.current?.expand();
  };

  const backgroundOptions = ['#ffffff', '#f4ecd8', '#000000'];
  // callbacks

  // render
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
        enableHandlePanningGesture={false}
        enableContentPanningGesture={false}
        enablePanDownToClose={false}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.sheetTitle}>Cài đặt hiển thị</Text>
          <Text style={styles.optionLabel}>Màu nền</Text>
          <View style={styles.colorOptions}>
            {backgroundOptions.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.colorCircle, { backgroundColor: color }]}
                onPress={() => setBgColor(color)}
              />
            ))}
          </View>

          {/* Thanh chỉnh cỡ chữ */}
          <Text style={styles.optionLabel}>Cỡ chữ</Text>
          <Slider
            style={{ width: '100%' }}
            minimumValue={12}
            maximumValue={30}
            value={fontSize}
            onValueChange={value => setFontSize(value)}
            minimumTrackTintColor="#1fb28a"
            maximumTrackTintColor="#ccc"
          />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  bookText: {
    lineHeight: 28,
  },
  sheetContent: {
    padding: 16,
    flex: 1,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  optionLabel: {
    fontSize: 14,
    marginTop: 16,
    marginBottom: 8,
  },
  colorOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  colorCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
