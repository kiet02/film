//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppIcon } from '../../../element/AppIcon/AppIcon';
import { AppButton } from '../../../element';

type BookReadingHeaderProps = {
  bgColor: string;
  toggleSettings: () => void;
  title: string;
  titlePress: () => void;
};

// create a component
export function BookReadingHeader({
  bgColor,
  toggleSettings,
  title,
  titlePress,
}: BookReadingHeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, { backgroundColor: bgColor }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AppIcon
          name="ChevronLeft"
          color={bgColor === '#000000' ? '#ffffff' : '#000000'}
          size={24}
        />
      </TouchableOpacity>

      <AppButton
        title={title}
        onPress={titlePress}
        titileStyle={{
          color: bgColor === '#000000' ? '#ffffff' : '#000000',
          fontSize: 24,
          fontWeight: 'bold',
        }}
        style={{ backgroundColor: 'transparent', padding: 0, marginLeft: 8 }}
        TouchableType="TouchableOpacity"
      />

      <TouchableOpacity onPress={toggleSettings}>
        <AppIcon
          name="Settings2"
          color={bgColor === '#000000' ? '#ffffff' : '#000000'}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

//make this component available to the app
