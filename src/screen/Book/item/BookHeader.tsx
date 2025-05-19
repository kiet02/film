//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { AppIcon } from '../../../element/AppIcon/AppIcon';

// create a component
export function BookHeader() {
  const navigation = useNavigation();
  const { colors } = useAppTheme();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AppIcon name="ChevronLeft" size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <AppIcon name="Bookmark" size={24} />
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});
