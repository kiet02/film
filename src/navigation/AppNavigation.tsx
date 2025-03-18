import {IntroScreen} from '../screen/intro/IntroScreen';
import {AllScreenStackParamList} from '../utils/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export function AppNavigation() {
  const Stack = createNativeStackNavigator<AllScreenStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
