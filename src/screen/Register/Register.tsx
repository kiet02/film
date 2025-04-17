import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppButton, AppInputText } from '../../element';
import {  AccountService, fetchApi, MainScreenParamList } from '../../utils';
import { Control, FieldValues, useForm, useFormContext } from 'react-hook-form';

type TRegisterForm = {
    register_username: string;
    register_email: string;
    register_password: string;
    register_confirmPassword: string;
};


const Register = () => {
  const navigation = useNavigation<MainScreenParamList<'Login'>['navigation']>();
  const {control,handleSubmit} = useForm<TRegisterForm>();
  const onSubmit = async ({register_username,register_email,register_password}:TRegisterForm) => {
    const resul = await fetchApi.register(register_username,register_email,register_password)
    if(!resul.token){
      Alert.alert(resul.message)
      return
    }
    AccountService.add({email:resul.email, token: resul.token});
    Alert.alert('Register success')
    navigation.navigate('tab');
  };

  return (

      <View style={styles.container}>
        <Text style={styles.title}>Create New Account</Text>
        
        <AppInputText
        control={control  as unknown as Control<FieldValues>}
        name="register_username"
        placeholder="Username"
        containerStyle={[{alignSelf: 'center', margin: 10}]}
        rules={{required: {value:true , message:"Please enter username"}}}
        />

        <AppInputText
        control={control as unknown as Control<FieldValues>}
        name="register_email"
        placeholder="Email"
        containerStyle={[{alignSelf: 'center', margin: 10}]}
        rules={{
          required: {value:true , message:"Please enter email"},
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        }}
        />

        <AppInputText
        control={control as unknown as Control<FieldValues>}
        name="register_password"
        placeholder="Password"
        secureTextEntry={true}
        containerStyle={[{alignSelf: 'center', margin: 10}]}
        rules={{required: {
            value:true ,
             message:"Please enter password"
            },
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          
          }}
        />

        <AppInputText
        control={control as unknown as Control<FieldValues>}
        name="register_confirmPassword"
        placeholder="Confirm Password"
        secureTextEntry={true}
        containerStyle={[{alignSelf: 'center', margin: 10}]}
        rules={{
            required: {
              value:true,
              message:"Please enter password"
            },
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            validate: (value, formValues) => {
              return value === formValues.register_password || 'Passwords must match';
            }
          }}
        />

        <AppButton
          title="Register"
            TouchableType="TouchableOpacity"
            ButtonStyle={{width: 200, alignSelf: 'center'}} 
            onPress={handleSubmit(onSubmit)} 
            />
        <View style={styles.footer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.linkText}>Login here</Text>
          </TouchableOpacity>
        </View>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf3de',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  linkText: {
    color: '#007AFF',
  },
});

export default Register;
