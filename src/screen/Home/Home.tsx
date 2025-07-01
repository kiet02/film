import React, { useCallback, useRef } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import { Categories } from './item/Categories';
import { AppText } from '../../element/AppText';
import { Sizes } from '../../utils/resource/size';
import { ListExplore } from './item/ListExplore';
import { HomeHeader } from './item/HomeHeader';
import { useFocusEffect } from '@react-navigation/native';
import { AppAreaView } from '../../element/AppAreaView/AppAreaView';
import { FormProvider, useForm } from 'react-hook-form';
import { Search } from '../Search/Search';

type TSearch = { search?: string; modal?: boolean };

export function HomeScreen() {
  const backPressCount = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const method = useForm<TSearch>({
    defaultValues: { search: '', modal: false },
  });
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
  console.log(method.watch(), 'sss');

  return (
    <FormProvider {...method}>
      <AppAreaView style={{ justifyContent: 'center' }}>
        <HomeHeader control={method.control} />
        <AppText
          styleText={{
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: Sizes.wpx(20),
            marginLeft: Sizes.wpx(10),
          }}
          text="Categories"
        />
        <Categories />
        <AppText
          styleText={{
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: Sizes.wpx(20),
            marginLeft: Sizes.wpx(10),
          }}
          text="Explore"
        />
        <ListExplore />
      </AppAreaView>
      <Search />
    </FormProvider>
  );
}
