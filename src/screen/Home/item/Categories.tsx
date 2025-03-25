/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Sizes} from '../../../utils/resource/size';
import {Colors} from '../../../utils/resource/color';

export function Categories() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.styleClassic}>
          <Text>Classic</Text>
        </View>
        <View style={styles.styleFiction}>
          <Text>Fiction</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.styleBestSellers}>
          <Text style={{transform: [{rotate: '-90deg'}]}}>Best Sellers</Text>
        </View>

        <View style={{justifyContent: 'space-between'}}>
          <View style={styles.styleCareer}>
            <Text>Career & Success</Text>
          </View>
          <View style={styles.styleMore}>
            <Text>More</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Sizes.width(95),
    height: Sizes.width(95),
    justifyContent: 'space-between',
  },
  styleClassic: {
    width: Sizes.width(60),
    height: Sizes.height(10),
    backgroundColor: Colors.light.categories.classic,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleFiction: {
    width: Sizes.width(34),
    height: Sizes.height(10),
    backgroundColor: Colors.light.categories.fiction,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleBestSellers: {
    width: Sizes.width(25),
    height: Sizes.height(33.2),
    backgroundColor: Colors.light.categories.BSell,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleCareer: {
    width: Sizes.width(68),
    height: Sizes.height(22),
    backgroundColor: Colors.light.categories.career,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleMore: {
    width: Sizes.width(68),
    height: Sizes.height(10.5),
    backgroundColor: Colors.light.categories.more,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
