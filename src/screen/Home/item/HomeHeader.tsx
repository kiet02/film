import React from 'react';
import { View } from 'react-native';
import { AppInputText } from '../../../element';
import { useFormContext } from 'react-hook-form';
import { Sizes } from '../../../utils/resource/size';

// import { useAppTheme } from '../../../hooks/useAppTheme';
type TSearch = { search?: string };
export function HomeHeader() {
  const { control } = useFormContext<TSearch>();
  // const { colors } = useAppTheme();
  return (
    <View>
      <AppInputText
        control={control}
        name="search"
        placeholder="Search"
        icon="Search"
        placeholderTextColor={'black'}
        inputStyle={{
          backgroundColor: 'white',
          width: Sizes.width(95),
          alignSelf: 'center',
        }}
        textStyle={{
          backgroundColor: 'white',
        }}
      />
    </View>
  );
}
