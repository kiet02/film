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
      initialRouteName="home"
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="home"
        component={AppNavigation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="bookmarks"
        component={BookSave}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="user"
        component={Account}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
