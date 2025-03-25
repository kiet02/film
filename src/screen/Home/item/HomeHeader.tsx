import React from 'react';
import {View, Text} from 'react-native';
import {AppInputText} from '../../../element';
import {useFormContext} from 'react-hook-form';
import {Sizes} from '../../../utils/resource/size';
import {Colors} from '../../../utils/resource/color';
type TSearch = {search?: string};
export function HomeHeader() {
  const {control} = useFormContext<TSearch>();
  //Octicons
  return (
    <View>
      <AppInputText
        control={control}
        name="search"
        placeholder="Search"
        placeholderTextColor={'black'}
        inputStyle={{
          backgroundColor: Colors.light.explore.item,
          width: Sizes.width(95),
          borderRadius: 100,
        }}
      />
    </View>
  );
}
