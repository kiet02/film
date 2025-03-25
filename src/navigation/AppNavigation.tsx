import {HomeScreen} from '../screen/Home/Home';
import {AllScreenStackParamList} from '../utils/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export function AppNavigation() {
  const Stack = createNativeStackNavigator<AllScreenStackParamList>();
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
