/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useRef } from 'react';
import { BackHandler, ToastAndroid, View } from 'react-native';
import { Categories } from './item/Categories';
import { AppText } from '../../element/AppText';
import { Sizes } from '../../utils/resource/size';
import { ListExplore } from './item/ListExplore';
import { HomeHeader } from './item/HomeHeader';
import { useFocusEffect } from '@react-navigation/native';

export function HomeScreen() {
  const backPressCount = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (backPressCount.current === 0) {
          backPressCount.current += 1;
          ToastAndroid.show('Press again to exit', ToastAndroid.SHORT);

          timeoutRef.current = setTimeout(() => {
            backPressCount.current = 0;
          }, 2000);

          return true; // chặn lần đầu
        } else {
          BackHandler.exitApp(); // lần 2 thoát app
          return true;
        }
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => {
        backHandler.remove(); // <-- sửa ở đây
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, [])
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcf3de',
      }}
    >
      <HomeHeader />
      <AppText
        styleText={{ fontSize: 30, fontWeight: 'bold' }}
        styleContainer={{ width: Sizes.width(95), marginTop: Sizes.wpx(20) }}
        text="Categories"
      />
      <Categories />
      <AppText
        styleText={{ fontSize: 30, fontWeight: 'bold' }}
        styleContainer={{ width: Sizes.width(95), marginTop: Sizes.wpx(30) }}
        text="Explore"
      />
      <ListExplore />
    </View>
  );
}
