//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../../../element/AppButton/AppIcon';
import { useNavigation } from '@react-navigation/native';

// create a component
export function BookHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="ChevronLeft" size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="Bookmark" size={24} />
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Icon name="Share" size={24} />
      </TouchableOpacity> */}
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});
