import { StyleSheet, Image, Alert } from 'react-native';
import { Sizes } from '../../utils/resource/size';
import { AnimatedButton } from './item/AnimatedButton';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { AccountService, fetchApi, MainScreenParamList } from '../../utils';
import { AppInputText } from '../../element';
import { useEffect } from 'react';
import { AppAreaView } from '../../element/AppAreaView/AppAreaView';

export type TLoginForm = { email: string; password: string };

export default function Login() {
  const { control, handleSubmit } = useForm<TLoginForm>();
  const navigation = useNavigation<MainScreenParamList<'Home'>['navigation']>();

  const onSubmit = async ({ email, password }: TLoginForm) => {
    const resule = await fetchApi.login(email, password);
    if (!resule.token) {
      Alert.alert('Login failed');
      return;
    }
    AccountService.add({ email: resule.email, token: resule.token });
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'tab' }],
      })
    );
  };

  useEffect(() => {
    const account = AccountService.get();
    if (account?.token) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'tab' }],
        })
      );
    }
  });

  return (
    <AppAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../../utils/image/Logo.png')} // Đảm bảo đường dẫn đúng
        style={Style.imag}
      />
      <AppInputText
        control={control as unknown as Control<FieldValues>}
        name="email"
        label="Email :"
        containerStyle={[{ alignSelf: 'center', margin: 10 }]}
        labelStyle={{ marginLeft: 10 }}
        rules={{ required: { value: true, message: 'Please enter email' } }}
      />
      <AppInputText
        control={control as unknown as Control<FieldValues>}
        name="password"
        secureTextEntry={true}
        label="Password :"
        labelStyle={{ marginLeft: 10 }}
        containerStyle={[{ alignSelf: 'center', margin: 10 }]}
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
      />
      <AnimatedButton
        onPressLogin={handleSubmit(onSubmit)}
        onPressRegister={() => navigation.navigate('Register')}
      />
    </AppAreaView>
  );
}

const Style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  imag: {
    width: Sizes.device_width,
    height: Sizes.height(20),
  },
});
