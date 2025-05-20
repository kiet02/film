import React, { useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { BookReadingHeader } from './item/BookReadingHeader';
import { BookReadingContent } from './item/BookReadingContent';
import { BookReadingSetting } from './item/BookReadingSetting';
import { AppAreaView } from '../../element/AppAreaView/AppAreaView';

export function BookReading() {
  const sheetRef = useRef<BottomSheet>(null);
  const [fontSize, setFontSize] = useState(16);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const animatedTextStyle = useAnimatedStyle(() => ({
    fontSize: withSpring(fontSize, { mass: 0.5, damping: 15, stiffness: 120 }),
  }));

  const toggleSettings = () => {
    sheetRef.current?.[isSettingsVisible ? 'close' : 'expand']();
    setIsSettingsVisible(!isSettingsVisible);
  };

  return (
    <AppAreaView backgroundColor={bgColor}>
      <StatusBar
        barStyle={bgColor === '#000000' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <BookReadingHeader bgColor={bgColor} toggleSettings={toggleSettings} />
      <BookReadingContent
        fontSize={fontSize}
        bgColor={bgColor}
        animatedTextStyle={animatedTextStyle}
      />
      <BookReadingSetting
        sheetRef={sheetRef}
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        toggleSettings={toggleSettings}
        fontSize={fontSize}
        setFontSize={setFontSize}
        bgColor={bgColor}
        setBgColor={setBgColor}
      />
    </AppAreaView>
  );
}
