
import {AllScreenStackParamList} from '../utils/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppBottomTab} from './AppBottomTab';
import Register from '../screen/Register/Register';
import Login from '../screen/Login/Login';
import { Categories } from '../screen/Categories/Categoris';


export function AppAllNavigation() {
  const Stack = createNativeStackNavigator<AllScreenStackParamList>();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tab"
        component={AppBottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
