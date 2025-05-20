import { Alert, View } from 'react-native';
import { AppButton, AppInputText } from '../../../element';
import { Control, FieldValues, useForm } from 'react-hook-form';

import { useBottomSheet } from '../../../BottomSheetProvider';
import { fetchApi } from '../../../utils';
import { useKeyboardExpandSheet } from '../module/useKeyboardExpandSheet';

type TUserForm = {
  password: string;
  newPassword: string;
  confirmPassword: string;
};

export function BottomSheetChangePassword({ logOut }: { logOut: () => void }) {
  const { control, handleSubmit, reset } = useForm<TUserForm>();
  const { closeSheet } = useBottomSheet();
  useKeyboardExpandSheet(true, 1, 3);

  const onSubmit = async ({ password, newPassword }: TUserForm) => {
    const result = await fetchApi.changePassword({
      currentPassword: password,
      newPassword,
    });
    if (result.err === 0) {
      Alert.alert('Change name successfully');
      reset();
      closeSheet();
      logOut();
      //   console.log(result);
    }
  };
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <AppInputText
        control={control as unknown as Control<FieldValues>}
        secureTextEntry={true}
        name="password"
        label="Password :"
        rules={{
          required: {
            value: true,
            message: 'Please enter password',
          },
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        }}
        containerStyle={[{ alignSelf: 'center', margin: 10 }]}
        inputStyle={{
          borderWidth: 1.5,
          marginTop: 10,
          borderRadius: 5,
          borderColor: 'black',
        }}
      />
      <AppInputText
        control={control as unknown as Control<FieldValues>}
        secureTextEntry={true}
        name="newPassword"
        label="New Password :"
        rules={{
          required: {
            value: true,
            message: 'Please enter password',
          },
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        }}
        containerStyle={[{ alignSelf: 'center', margin: 10 }]}
        inputStyle={{
          borderWidth: 1.5,
          marginTop: 10,
          borderRadius: 5,
          borderColor: 'black',
        }}
      />
      <AppInputText
        control={control as unknown as Control<FieldValues>}
        secureTextEntry={true}
        name="confirmPassword"
        label="Confirm Password :"
        rules={{
          required: {
            value: true,
            message: 'Please enter password',
          },
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
          validate: (value, formValues) => {
            return value === formValues.newPassword || 'Passwords must match';
          },
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
