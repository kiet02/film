/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {Sizes} from '../../../utils/resource/size';
import {AppText} from '../../../element/AppText';
import {Colors} from '../../../utils/resource/color';
import { useExplore } from '../module/useExplore';

export function ListExplore() {
  const{data} = useExplore()
  

  // const data = [
  //   {
  //     image: require('../../../utils/image/Logo.png'),
  //     name: 'The art',
  //     author: 'sdsdsdsdsd',
  //   },
  //   {
  //     image: require('../../../utils/image/Logo.png'),
  //     name: 'The art1',
  //     author: 'sdsdsdsdsd',
  //   },
  //   {
  //     image: require('../../../utils/image/Logo.png'),
  //     name: 'The art2',
  //     author: 'sdsdsdsdsd',
  //   },
  //   {
  //     image: require('../../../utils/image/Logo.png'),
  //     name: 'The art3',
  //     author: 'sdsdsdsdsd',
  //   },
  //   {
  //     image: require('../../../utils/image/Logo.png'),
  //     name: 'The art4',
  //     author: 'sdsdsdsdsd',
  //   },
  //   {
  //     image: require('../../../utils/image/Logo.png'),
  //     name: 'The art5',
  //     author: 'sdsdsdsdsd',
  //   },
  // ];
  return (
    <View style={{height: Sizes.height(20), marginBottom: Sizes.wpx(20)}}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image source={item.img as ImageSourcePropType } style={styles.image} />
            <View>
              <AppText
                key={'title'}
                styleText={{fontWeight: 'bold', fontSize: 20,maxWidth: Sizes.width(45)}}
                text={item.name}
                 numberOfLines={1}
                ellipsizeMode="tail"
              />
              <AppText key={'author'} text={item.Author.name} />
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
    margin: Sizes.wpx(10),
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: Sizes.width(23),
    height: Sizes.height(12),
    backgroundColor: 'yellow',
    margin: Sizes.wpx(15),
    borderRadius: 10,
  },
});
