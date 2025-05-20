import React, { useMemo } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Slider from '@react-native-community/slider';
import { BookReadingSettingHeader } from './BookReadingSettingHeader';
import { BookReadingSettingBackground } from './BookReadingSettingBackground';

interface BookReadingSettingProps {
  sheetRef: React.RefObject<BottomSheet>;
  isSettingsVisible: boolean;
  setIsSettingsVisible: (value: boolean) => void;
  toggleSettings: () => void;
  fontSize: number;
  setFontSize: (value: number) => void;
  bgColor: string;
  setBgColor: (value: string) => void;
}

export function BookReadingSetting({
  sheetRef,
  setIsSettingsVisible,
  toggleSettings,
  fontSize,
  setFontSize,
  bgColor,
  setBgColor,
}: BookReadingSettingProps) {
  const snapPoints = useMemo(() => ['20%'], []);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      onClose={() => setIsSettingsVisible(false)}
      index={-1}
      style={styles.bottomSheet}
      enableContentPanningGesture={false}
      enableHandlePanningGesture={false}
    >
      <BottomSheetView style={styles.sheetContent}>
        <BookReadingSettingHeader toggleSettings={toggleSettings} />
        <BookReadingSettingBackground
          bgColor={bgColor}
          setBgColor={setBgColor}
        />

        <Text style={styles.optionLabel}>
          Font Size: {Math.round(fontSize)}px
        </Text>
        <View style={styles.sliderContainer}>
          <Text style={[styles.sliderValue, { fontSize: 14 }]}>A</Text>
          <Slider
            style={styles.slider}
            minimumValue={14}
            maximumValue={32}
            step={0.5}
            onValueChange={setFontSize}
            minimumTrackTintColor="#1fb28a"
            maximumTrackTintColor="#ccc"
            thumbTintColor="#1fb28a"
            {...(Platform.OS === 'ios' ? { tapToSeek: true } : {})}
          />
          <Text style={[styles.sliderValue, { fontSize: 32 }]}>A</Text>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  sheetContent: {
    padding: 16,
    flex: 1,
  },
  optionLabel: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 12,
    fontWeight: '500',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  slider: {
    flex: 1,
    marginHorizontal: 15,
    height: 40,
  },
  sliderValue: {
    fontWeight: '500',
  },
});
