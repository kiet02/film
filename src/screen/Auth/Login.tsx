import {View, StyleSheet, Image} from 'react-native';
import {Sizes} from '../../utils/resource/size';
import {AnimatedTextInput} from './item/AnimatedTextInput';
import {AnimatedButton} from './item/AnimatedButton';
import {useFormContext} from 'react-hook-form';

export type TLoginForm = {email: string; password: string};

export default function Login() {
  const {control, handleSubmit} = useFormContext<TLoginForm>();
  const onSubmit = ({email, password}: TLoginForm) => {};

  return (
    <View style={Style.main}>
      <Image
        source={require('../../utils/image/Logo.png')} // Đảm bảo đường dẫn đúng
        style={Style.imag}
      />
      <AnimatedTextInput
        control={control}
        name="email"
        duration={500}
        label="Email :"
      />
      <AnimatedTextInput
        control={control}
        name="password"
        duration={700}
        label="Password :"
      />
      <AnimatedButton duration={900} onPressLogin={handleSubmit(onSubmit)} />
    </View>
  );
}

const Style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fcf3de',
    justifyContent: 'center',
  },
  imag: {
    width: Sizes.device_width,
    height: Sizes.height(20),
  },
});
