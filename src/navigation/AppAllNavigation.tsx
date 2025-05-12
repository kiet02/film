import { AllScreenStackParamList } from '../utils/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppBottomTab } from './AppBottomTab';
import Register from '../screen/Register/Register';
import Login from '../screen/Login/Login';
import { Categories } from '../screen/Categories/Categoris';
import AllCategories from '../screen/AllCategories/AllCategories';
import { IntroScreen } from '../screen/intro/IntroScreen';
import { View } from 'react-native';
import Account from '../screen/Account/Account';
import { Book } from '../screen/Book/Book';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BookReading } from '../screen/BookReading/BookReading';

export function AppAllNavigation() {
  const Stack = createNativeStackNavigator<AllScreenStackParamList>();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: '#fcf3de' }}>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="tab"
            component={AppBottomTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AllCategories"
            component={AllCategories}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Intro"
            component={IntroScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="User"
            component={Account}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Book"
            component={Book}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BookReading"
            component={BookReading}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
