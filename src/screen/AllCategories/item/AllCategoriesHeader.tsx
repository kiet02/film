import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from '../../../element/AppText';
import { AppIcon } from '../../../element/AppIcon/AppIcon';
import { Sizes } from '../../../utils/resource/size';

type AllCategoriesHeaderProps = {
  name: string;
  onPress: () => void;
};

export const AllCategoriesHeader = ({
  name,
  onPress,
}: AllCategoriesHeaderProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        <AppIcon name="ArrowLeft" size={24} />
      </TouchableOpacity>
      <AppText text={name} styleText={styles.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizes.wpx(10),
    marginBottom: Sizes.wpx(20),
  },
  backButton: {
    marginRight: Sizes.wpx(10),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
