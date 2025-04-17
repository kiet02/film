/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBottomStackParam} from '../utils';
import BookSave from '../screen/BookSave/BookSave';
import Account from '../screen/Account/Account';
import {AppNavigation} from './AppNavigation';
import CustomTabBar from './item/CustomTabBar';

export function AppBottomTab() {
  const Tab = createBottomTabNavigator<TabBottomStackParam>();
  return (
    <Tab.Navigator
      initialRouteName="House"
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="House"
        component={AppNavigation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookSave}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="User"
        component={Account}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
