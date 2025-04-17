import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from '../../../element/AppText';
import Icon from '../../../element/AppButton/AppIcon';
import { Sizes } from '../../../utils/resource/size';

type CategoriesHeaderProps = {
  name: string;
  onPress: () => void;
};

export const CategoriesHeader = ({ name, onPress }: CategoriesHeaderProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        <Icon name="ArrowLeft" size={24} />
      </TouchableOpacity>
      <AppText
        text={name}
        style={styles.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Sizes.wpx(50),
    paddingHorizontal: Sizes.wpx(20),
  },
  backButton: {
    marginRight: Sizes.wpx(10),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});