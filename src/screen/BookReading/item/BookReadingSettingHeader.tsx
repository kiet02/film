import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AppIcon } from '../../../element/AppIcon/AppIcon';

interface BookReadingSettingHeaderProps {
  toggleSettings: () => void;
}

export function BookReadingSettingHeader({
  toggleSettings,
}: BookReadingSettingHeaderProps) {
  return (
    <View style={styles.sheetHeader}>
      <Text style={styles.sheetTitle}>Display Settings</Text>
      <TouchableOpacity style={styles.closeButton} onPress={toggleSettings}>
        <AppIcon name="X" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    padding: 4,
  },
});
