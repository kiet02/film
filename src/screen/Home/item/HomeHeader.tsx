/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { AppInputText } from '../../../element';
import { useFormContext } from 'react-hook-form';
import { Sizes } from '../../../utils/resource/size';
import { Colors } from '../../../utils/resource/color';
type TSearch = { search?: string };
export function HomeHeader() {
  const { control } = useFormContext<TSearch>();

  return (
    <View>
      <AppInputText
        control={control}
        name="search"
        placeholder="Search"
        icon="Search"
        placeholderTextColor={'black'}
        inputStyle={{
          backgroundColor: Colors.explore.item,
          width: Sizes.width(95),
        }}
        textStyle={{
          backgroundColor: Colors.explore.item,
        }}
      />
    </View>
  );
}
