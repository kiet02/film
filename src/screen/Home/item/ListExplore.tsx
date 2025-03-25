/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, StyleSheet, Image} from 'react-native';
import {Sizes} from '../../../utils/resource/size';
import {AppText} from '../../../element/AppText';
import {Colors} from '../../../utils/resource/color';

export function ListExplore() {
  const data = [
    {
      image: require('../../../utils/image/Logo.png'),
      name: 'The art',
      author: 'sdsdsdsdsd',
    },
    {
      image: require('../../../utils/image/Logo.png'),
      name: 'The art1',
      author: 'sdsdsdsdsd',
    },
    {
      image: require('../../../utils/image/Logo.png'),
      name: 'The art2',
      author: 'sdsdsdsdsd',
    },
    {
      image: require('../../../utils/image/Logo.png'),
      name: 'The art3',
      author: 'sdsdsdsdsd',
    },
    {
      image: require('../../../utils/image/Logo.png'),
      name: 'The art4',
      author: 'sdsdsdsdsd',
    },
    {
      image: require('../../../utils/image/Logo.png'),
      name: 'The art5',
      author: 'sdsdsdsdsd',
    },
  ];
  return (
    <View style={{height: Sizes.height(20)}}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.name.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View>
              <AppText
                key={'title'}
                styleText={{fontWeight: 'bold', fontSize: 20}}
                text={item.name}
              />
              <AppText key={'author'} text={item.author} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: Sizes.width(80),
    height: Sizes.height(15),
    backgroundColor: Colors.light.explore.item,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: Sizes.width(23),
    height: Sizes.height(12),
    backgroundColor: 'yellow',
    margin: 15,
    borderRadius: 10,
  },
});
