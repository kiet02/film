import React from 'react';
import { View } from 'react-native';
import { AppInputText } from '../../../element';
import { useFormContext } from 'react-hook-form';
import { Sizes } from '../../../utils/resource/size';

import { useAppTheme } from '../../../hooks/useAppTheme';
type TSearch = { search?: string };
export function HomeHeader() {
  const { control } = useFormContext<TSearch>();
  const { colors } = useAppTheme();
  return (
    <View>
      <AppInputText
        control={control}
        name="search"
        placeholder="Search"
        icon="Search"
        placeholderTextColor={'black'}
        inputStyle={{
          backgroundColor: colors.explore.item,
          width: Sizes.width(95),
        }}
        textStyle={{
          backgroundColor: colors.explore.item,
        }}
      />
    </View>
  );
}
