import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from '../../../element/AppText';
import { Sizes } from '../../../utils/resource/size';

import { useNavigation } from '@react-navigation/native';
import { MainScreenParamList } from '../../../utils';
import { AppIcon } from '../../../element/AppIcon/AppIcon';
import { useAppTheme } from '../../../hooks/useAppTheme';

// create a component
export function BookInfo() {
  const navigation = useNavigation<MainScreenParamList<'Book'>['navigation']>();
  const { colors } = useAppTheme();
  return (
    <View
      style={{
        width: '100%',
        height: Sizes.wpx(100),
        backgroundColor: colors.background,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}
      >
        <View style={styles.statItem}>
          <AppText
            text="4.5"
            styleText={[styles.statValue, { color: colors.text.primary }]}
          />
          <AppText text="rating" styleText={styles.statLabel} />
        </View>
        <View style={styles.statItem}>
          <AppText
            text="1"
            styleText={[styles.statValue, { color: colors.text.primary }]}
          />
          <AppText text="chapter" styleText={styles.statLabel} />
        </View>
        <View style={styles.statItem}>
          <AppText
            text="viet"
            styleText={[styles.statValue, { color: colors.text.primary }]}
          />
          <AppText text="language" styleText={styles.statLabel} />
        </View>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('BookReading')}
        >
          <AppIcon name="BookOpen" size={24} />
          <AppText text="Read" styleText={styles.actionText} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  statItem: {
    alignItems: 'center',
    width: Sizes.wpx(70),
    height: Sizes.wpx(50),
    justifyContent: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  actionContainer: {
    flexDirection: 'row',

    backgroundColor: '#000',
    borderRadius: 8,
    overflow: 'hidden',
  },
  actionText: {
    marginLeft: 8,
    fontSize: 16,
  },
});

//make this component available to the app
