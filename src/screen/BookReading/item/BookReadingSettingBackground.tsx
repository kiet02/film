import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface BookReadingSettingBackgroundProps {
  bgColor: string;
  setBgColor: (value: string) => void;
}

export function BookReadingSettingBackground({ bgColor, setBgColor }: BookReadingSettingBackgroundProps) {
  return (
    <View>
      <Text style={styles.optionLabel}>Background Color</Text>
      <View style={styles.colorOptions}>
        {['#ffffff', '#f4ecd8', '#000000'].map((color) => (
          <TouchableOpacity
            key={color}
            style={[
              styles.colorCircle,
              { backgroundColor: color },
              bgColor === color && styles.selectedColor,
            ]}
            onPress={() => setBgColor(color)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionLabel: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 12,
    fontWeight: '500',
  },
  colorOptions: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    marginBottom: 20,
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedColor: { 
    borderWidth: 2, 
    borderColor: '#1fb28a' 
  },
}); 