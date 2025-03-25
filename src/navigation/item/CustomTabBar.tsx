import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Sizes} from '../../utils/resource/size';
import Icon from 'react-native-vector-icons/Entypo';
const CustomTabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  //bookmark ,home, user

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const iconName = route.name;
        console.log(route.name);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabItem, isFocused && styles.tabItemFocused]}>
            <Icon
              name={iconName}
              size={24}
              color={isFocused ? 'white' : '#666'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderTopWidth: 1,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 30,
    width: Sizes.width(70),
    height: Sizes.height(8),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  tabItemFocused: {},
  tabText: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
  },
  tabTextFocused: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default CustomTabBar;
