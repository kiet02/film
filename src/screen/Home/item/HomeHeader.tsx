import React from 'react';
import { View } from 'react-native';
import { AppInputText } from '../../../element';
import { Sizes } from '../../../utils/resource/size';
import { Control, useFormContext } from 'react-hook-form';

type TSearch = { search?: string; modal?: boolean };
export function HomeHeader({ control }: { control: Control }) {
  const { setValue } = useFormContext<TSearch>();
  return (
    <View>
      <AppInputText
        control={control}
        name="search"
        placeholder="Search"
        icon="Search"
        placeholderTextColor={'black'}
        onFocus={() => setValue('modal', true)}
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
