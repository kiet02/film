import Login from '../screen/Auth/Login';
import {AllScreenStackParamList} from '../utils/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppBottomTab} from './AppBottomTab';

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
    </Stack.Navigator>
  );
}
