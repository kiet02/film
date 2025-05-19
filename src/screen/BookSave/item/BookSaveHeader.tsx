import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from '../../../element/AppText';
import { AppIcon } from '../../../element/AppIcon/AppIcon';
import { Sizes } from '../../../utils/resource/size';

type BookSaveHeaderProps = {
  name: string;
};

export const BookSaveHeader = ({ name }: BookSaveHeaderProps) => {
  return (
    <View style={styles.header}>
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
    marginLeft: Sizes.wpx(10),
  },
  backButton: {
    marginRight: Sizes.wpx(10),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
