//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from '../../../element/AppText';
import { Sizes } from '../../../utils/resource/size';
import { Colors } from '../../../utils/resource/color';
import { useNavigation } from '@react-navigation/native';
import { MainScreenParamList } from '../../../utils';
import { AppIcon } from '../../../element/AppIcon/AppIcon';

// create a component
export function BookInfo() {
  const navigation = useNavigation<MainScreenParamList<'Book'>['navigation']>();
  return (
    <View style={styles.statsContainer}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: Sizes.wpx(90),
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <View style={styles.statItem}>
          <AppText text="4.5" styleText={styles.statValue} />
          <AppText text="rating" styleText={styles.statLabel} />
        </View>
        <View style={styles.statItem}>
          <AppText text="1" styleText={styles.statValue} />
          <AppText text="chapter" styleText={styles.statLabel} />
        </View>
        <View style={styles.statItem}>
          <AppText text="viet" styleText={styles.statValue} />
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
  statsContainer: {
    width: '100%',
  },
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
    color: '#666',
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
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
});

//make this component available to the app
