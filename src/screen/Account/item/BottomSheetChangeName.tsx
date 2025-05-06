import { Alert, Keyboard, View } from 'react-native';
import { AppButton, AppInputText } from '../../../element';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { fetchApi } from '../../../utils';
import { useBottomSheet } from '../../../BottomSheetProvider';
import { useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useKeyboardExpandSheet } from '../module/useKeyboardExpandSheet';

type TUserForm = {
  changeName: string;
};

type TUserFormChangeName = {
  refetch: () => void;
};

export function BottomSheetChangeName({ refetch }: TUserFormChangeName) {
  const { control, handleSubmit, reset } = useForm<TUserForm>();
  const { closeSheet, expandSheet, normalSheet } = useBottomSheet();
  useKeyboardExpandSheet(true, 0, 2);

  const onSubmit = async ({ changeName }: TUserForm) => {
    const result = await fetchApi.UpdateUser(changeName);
    if (result.err === 0) {
      Alert.alert('Update name successfully');
      refetch();
      reset();
      closeSheet(); // Đóng BottomSheet sau khi thành công
    }
    console.log(result.msg);
    console.log('====================================');
    console.log(result.err);
    console.log('====================================');
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <AppInputText
        control={control as unknown as Control<FieldValues>}
        name="changeName"
        label="Change Name :"
        rules={{
          required: { value: true, message: 'This field is required' },
        }}
        containerStyle={[{ alignSelf: 'center', margin: 10 }]}
        inputStyle={{
          borderWidth: 1.5,
          marginTop: 10,
          borderRadius: 5,
          borderColor: 'black',
        }}
      />
      <AppButton
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        titileStyle={{
          marginTop: 20,
          backgroundColor: 'blue',
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: 'center',
        }}
        TouchableType="TouchableOpacity"
      />
    </View>
  );
}
