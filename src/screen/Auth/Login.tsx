import {View, StyleSheet, Image} from 'react-native';
import {Sizes} from '../../utils/resource/size';
import {AnimatedTextInput} from './item/AnimatedTextInput';
import {AnimatedButton} from './item/AnimatedButton';
import {useFormContext} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {MainScreenParamList} from '../../utils';

export type TLoginForm = {email: string; password: string};

export default function Login() {
  const {control, handleSubmit} = useFormContext<TLoginForm>();
  const navigation = useNavigation<MainScreenParamList<'Home'>['navigation']>();

  const onSubmit = ({email, password}: TLoginForm) => {
    navigation.navigate('HomeScreen');
  };

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
        inputStyle={{marin: 10}}
      />
      <AnimatedTextInput
        control={control}
        name="password"
        duration={700}
        label="Password :"
      />
      <AnimatedButton
        duration={900}
        onPressLogin={() => navigation.navigate('tab')}
      />
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
