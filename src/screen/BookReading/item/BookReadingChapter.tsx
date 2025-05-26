import React, { useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import Slider from '@react-native-community/slider';
import { BookReadingSettingHeader } from './BookReadingSettingHeader';
import { BookReadingSettingBackground } from './BookReadingSettingBackground';
import { useFormContext } from 'react-hook-form';

interface BookReadingSettingProps {
  sheetRef: React.RefObject<BottomSheet>;
  toggleSettings: () => void;
  fontSize: number;
  setFontSize: (value: number) => void;
  bgColor: string;
  setBgColor: (value: string) => void;
  data: Array<{ id: string | number; chapter: string }>;
}

export function BookReadingChapter({
  sheetRef,
  toggleSettings,
  fontSize,
  setFontSize,
  bgColor,
  setBgColor,
  data,
}: BookReadingSettingProps) {
  const snapPoints = useMemo(() => ['20%'], []);
  const { control, setValue } = useFormContext();
  const renderItem = ({
    item,
  }: {
    item: { id: string | number; chapter: string };
  }) => (
    <TouchableOpacity
      style={styles.sliderContainer}
      onPress={() => setValue('chapter', item.id)}
    >
      <Text style={styles.optionLabel}>{item.chapter}</Text>
    </TouchableOpacity>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          onPress={sheetRef.current?.close}
        />
      )}
      enablePanDownToClose={false}
      index={-1}
      style={styles.bottomSheet}
      enableContentPanningGesture={false}
      enableHandlePanningGesture={false}
    >
      <BottomSheetView style={styles.sheetContent}>
        <BottomSheetFlatList
          data={data}
          keyExtractor={(item: any) => item.id}
          renderItem={renderItem}
        />
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
