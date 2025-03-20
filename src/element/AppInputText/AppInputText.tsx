/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import {AppLabel} from '../AppLabel/AppLabel';
import Animated from 'react-native-reanimated';
import {Controller, UseControllerProps} from 'react-hook-form';

type TAppInputText = UseControllerProps &
  Omit<TextInputProps, 'style' | 'defaultValue'> & {
    label?: string;
    value?: string;
    textStyle?: StyleProp<TextStyle>;
    inputStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    containerLabel?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    defaultValue?: string;
  };

export function AppInputText({
  textStyle,
  inputStyle,
  containerStyle,
  label,
  containerLabel,
  labelStyle,
  defaultValue = '', // Mặc định là chuỗi rỗng
  name,
  control,
  rules,
  ...TextInputProps
}: TAppInputText) {
  const onChangeText = (onChange: (...event: any[]) => void) => (e: string) => {
    if (e.startsWith(' ')) return; // Ngăn nhập khoảng trắng đầu
    onChange(e);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue} // Đảm bảo defaultValue luôn có
      render={(
        {field: {onChange, value = ''}}, // Gán mặc định cho value
      ) => (
        <Animated.View style={containerStyle}>
          {label && (
            <AppLabel
              name={label}
              containerLabel={containerLabel}
              labelStyle={labelStyle}
            />
          )}
          <TextInput
            {...TextInputProps}
            value={value} // value luôn là chuỗi
            onChangeText={onChangeText(onChange)}
            style={[
              {
                padding: 10,
                width: 350,
                height: 50,
                marginBottom: 20,
                borderRadius: 10,
                backgroundColor: 'white',
                elevation: 1,
                color: 'black',
                marginTop: 5,
              },
              textStyle,
              inputStyle,
            ]}
          />
        </Animated.View>
      )}
    />
  );
}
