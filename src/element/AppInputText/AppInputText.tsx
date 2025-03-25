/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInputProps,
  View,
} from 'react-native';
import {AppLabel} from '../AppLabel/AppLabel';
import Animated from 'react-native-reanimated';
import {Controller, UseControllerProps} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Octicons';

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
    renderLeft?: () => void;
    renderRight?: () => void;
    icon?: string;
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
    if (e.startsWith(' ')) {
      return;
    }
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="search" size={20} />
            <TextInput
              {...TextInputProps}
              value={value} // value luôn là chuỗi
              onChangeText={onChangeText(onChange)}
              style={[
                {
                  padding: 10,
                  width: 350,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  elevation: 1,
                  color: 'black',
                },
                textStyle,
                inputStyle,
              ]}
            />
          </View>
        </Animated.View>
      )}
    />
  );
}
