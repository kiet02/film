/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Sizes} from '../../../utils/resource/size';
import {Colors} from '../../../utils/resource/color';
import {AppText} from '../../../element/AppText';

export function Categories() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.styleClassic}>
          <AppText
            text="Classic"
            styleText={{fontSize: 20, fontWeight: 'bold'}}
          />
        </View>
        <View style={styles.styleFiction}>
          <AppText
            text="Fiction"
            styleText={{fontSize: 20, fontWeight: 'bold'}}
          />
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.styleBestSellers}>
          <AppText
            text="Best Sellers"
            styleText={{
              width: '100%',
              height: Sizes.wpx(25),
              fontWeight: 'bold',
              fontSize: 20,
              transform: [{rotate: '-90deg'}],
            }}
          />
        </View>

        <View style={{justifyContent: 'space-between'}}>
          <View style={styles.styleCareer}>
            <AppText
              text="Career & Success"
              styleText={{fontSize: 20, fontWeight: 'bold'}}
            />
          </View>
          <View style={styles.styleMore}>
            <AppText
              text="More ->"
              styleText={{fontSize: 20, fontWeight: 'bold'}}
            />
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
  text: {},
});
