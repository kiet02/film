import React from 'react';
import {View} from 'react-native';
import {Categories} from './item/Categories';
import {AppText} from '../../element/AppText';
import {Sizes} from '../../utils/resource/size';
import {ListExplore} from './item/ListExplore';
import {HomeHeader} from './item/HomeHeader';

export function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <HomeHeader />
      <AppText
        styleText={{fontSize: 30, fontWeight: 'bold'}}
        styleContainer={{width: Sizes.width(95)}}
        text="Categories"
      />

      <Categories />
      <AppText
        styleText={{fontSize: 30, fontWeight: 'bold'}}
        styleContainer={{width: Sizes.width(95)}}
        text="Explore"
      />
      <ListExplore />
    </View>
  );
}
