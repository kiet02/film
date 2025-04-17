/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Sizes} from '../../../utils/resource/size';
import {Colors} from '../../../utils/resource/color';
import {AppText} from '../../../element/AppText';
import { AppButton } from '../../../element';
import { useNavigation } from '@react-navigation/native';
import { MainScreenParamList } from '../../../utils';

export function Categories() {
  const navigation = useNavigation<MainScreenParamList<"Categories">['navigation']>();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppButton 
        title='Fantasy'
        titileStyle={{fontSize: 20, fontWeight: 'bold',color: 'black',backgroundColor: Colors.light.categories.classic}} 
        ButtonStyle={styles.styleClassic} 
        TouchableType='TouchableOpacity' 
        onPress={() => navigation.navigate('Categories', {name: 'Fantasy'})}
        />
        <AppButton 
        title='Horror'
        titileStyle={{fontSize: 20, fontWeight: 'bold',color: 'black',backgroundColor: Colors.light.categories.horror}} 
        ButtonStyle={styles.styleHorror} 
        TouchableType='TouchableOpacity' 
        onPress={() => navigation.navigate('Categories', {name: 'Horror'})}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppButton 
        title='Adventure'
        titileStyle={{ width: '120%',
          height: Sizes.wpx(45),
          fontWeight: 'bold',
          fontSize: 20,
          transform: [{rotate: '-90deg'}],color: 'black',backgroundColor: Colors.light.categories.BSell}}
        ButtonStyle={styles.styleAventure}
        TouchableType='TouchableOpacity'
        onPress={() => navigation.navigate('Categories', {name: 'Adventure'})}
        />
          
        

        <View style={{justifyContent: 'space-between'}}>
          <AppButton ButtonStyle={styles.styleScienceFiction}
          titileStyle={{fontSize: 20, fontWeight: 'bold',color: 'black',backgroundColor: Colors.light.categories.scienceFiction}}
          TouchableType='TouchableOpacity'
          title='Science Fiction'
          onPress={() => navigation.navigate('Categories', {name: 'Science Fiction'})}
          />

          <AppButton ButtonStyle={styles.styleMore}
          titileStyle={{fontSize: 20, fontWeight: 'bold',color: 'black',backgroundColor: Colors.light.categories.more}}
          title='All'
          TouchableType='TouchableOpacity'
          onPress={() => navigation.navigate('AllCategories', {name: 'All'})}
          />
          
          
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
  styleHorror: {
    width: Sizes.width(34),
    height: Sizes.height(10),
    backgroundColor: Colors.light.categories.horror,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleAventure: {
    width: Sizes.width(25),
    height: Sizes.height(33.2),
    backgroundColor: Colors.light.categories.BSell,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleScienceFiction: {
    width: Sizes.width(68),
    height: Sizes.height(22),
    backgroundColor: Colors.light.categories.scienceFiction,
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
