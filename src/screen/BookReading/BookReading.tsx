import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { BookReadingHeader } from './item/BookReadingHeader';
import { BookReadingContent } from './item/BookReadingContent';
import { BookReadingSetting } from './item/BookReadingSetting';
import { AppAreaView } from '../../element/AppAreaView/AppAreaView';
import { useChapter } from './module/useChapter';
import { useChapterAll } from './module/useCahpterAll';
import { useRoute } from '@react-navigation/native';
import { MainScreenParamList } from '../../utils';
import { BookReadingChapter } from './item/BookReadingChapter';
import { FormProvider, useForm } from 'react-hook-form';
import { useLoader } from '../../element/AppLoad/LoaderContext';

export function BookReading() {
  const route = useRoute<MainScreenParamList<'BookReading'>['route']>();
  const sheetRef = useRef<BottomSheet>(null);
  const sheetChapterRef = useRef<BottomSheet>(null);
  const [fontSize, setFontSize] = useState(16);
  const [bgColor, setBgColor] = useState('#ffffff');
  const { hideLoader, showLoader } = useLoader();
  const methods = useForm();

  const { data: allChapters, isFetching: isFetchingAll } = useChapterAll(
    route.params?.BookId!
  );
  const chapterId = methods.watch('chapter');
  const { data: chapter, isFetching } = useChapter(
    chapterId,
    route.params?.BookId!,
    !!chapterId
  );

  useEffect(() => {
    if (isFetching || isFetchingAll) {
      showLoader();
    } else {
      hideLoader();
    }
  }, []);
  showLoader();

  useEffect(() => {
    if (allChapters && allChapters.length > 0 && !chapterId) {
      const firstChapterId = allChapters[0].id;
      methods.setValue('chapter', firstChapterId);
    }
  }, [allChapters]);

  const animatedTextStyle = useAnimatedStyle(() => ({
    fontSize: withSpring(fontSize, { mass: 0.5, damping: 15, stiffness: 120 }),
  }));

  const toggleSettings = () => {
    sheetRef.current?.expand();
  };

  const toggleChapter = () => {
    sheetChapterRef.current?.expand();
  };

  return (
    <FormProvider {...methods}>
      <AppAreaView backgroundColor={bgColor}>
        <StatusBar
          barStyle={bgColor === '#000000' ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        <BookReadingHeader
          title={chapter?.chapter || ''}
          titlePress={toggleChapter}
          bgColor={bgColor}
          toggleSettings={toggleSettings}
        />
        <BookReadingContent
          content={chapter?.content || ''}
          fontSize={fontSize}
          bgColor={bgColor}
          animatedTextStyle={animatedTextStyle}
        />
        <BookReadingSetting
          sheetRef={sheetRef}
          toggleSettings={toggleSettings}
          fontSize={fontSize}
          setFontSize={setFontSize}
          bgColor={bgColor}
          setBgColor={setBgColor}
        />

        <BookReadingChapter
          data={allChapters || []}
          sheetRef={sheetChapterRef}
          toggleSettings={toggleChapter}
          fontSize={fontSize}
          setFontSize={setFontSize}
          bgColor={bgColor}
          setBgColor={setBgColor}
        />
      </AppAreaView>
    </FormProvider>
  );
}
