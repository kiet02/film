/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Sizes } from '../../../utils/resource/size';
import { AppButton } from '../../../element';
import { useNavigation } from '@react-navigation/native';
import { MainScreenParamList } from '../../../utils';
import { useAppTheme } from '../../../hooks/useAppTheme';

export function Categories() {
  const navigation =
    useNavigation<MainScreenParamList<'Categories'>['navigation']>();
  const { colors } = useAppTheme();
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <AppButton
            title="Fantasy"
            titileStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              backgroundColor: colors.categories.classic,
            }}
            ButtonStyle={[
              styles.styleClassic,
              { backgroundColor: colors.categories.classic },
            ]}
            TouchableType="TouchableOpacity"
            onPress={() =>
              navigation.navigate('Categories', { name: 'Fantasy' })
            }
          />
          <AppButton
            title="Horror"
            titileStyle={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              backgroundColor: colors.categories.horror,
            }}
            ButtonStyle={[
              styles.styleHorror,
              { backgroundColor: colors.categories.horror },
            ]}
            TouchableType="TouchableOpacity"
            onPress={() =>
              navigation.navigate('Categories', { name: 'Horror' })
            }
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <AppButton
            title="Adventure"
            titileStyle={{
              width: '120%',
              height: Sizes.wpx(45),
              fontWeight: 'bold',
              fontSize: 20,
              transform: [{ rotate: '-90deg' }],
              color: 'black',
              backgroundColor: colors.categories.BSell,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            ButtonStyle={[
              styles.styleAventure,
              { backgroundColor: colors.categories.BSell },
            ]}
            TouchableType="TouchableOpacity"
            onPress={() =>
              navigation.navigate('Categories', { name: 'Adventure' })
            }
          />

          <View style={{ justifyContent: 'space-between' }}>
            <AppButton
              ButtonStyle={[
                styles.styleScienceFiction,
                { backgroundColor: colors.categories.scienceFiction },
              ]}
              titileStyle={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                backgroundColor: colors.categories.scienceFiction,
              }}
              TouchableType="TouchableOpacity"
              title="Science Fiction"
              onPress={() =>
                navigation.navigate('Categories', { name: 'Science Fiction' })
              }
            />

            <AppButton
              ButtonStyle={[
                styles.styleMore,
                { backgroundColor: colors.categories.more },
              ]}
              titileStyle={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                backgroundColor: colors.categories.more,
              }}
              title="All"
              TouchableType="TouchableOpacity"
              onPress={() =>
                navigation.navigate('AllCategories', { name: 'All' })
              }
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
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleHorror: {
    width: Sizes.width(34),
    height: Sizes.height(10),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleAventure: {
    width: Sizes.width(25),
    height: Sizes.height(33.2),

    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleScienceFiction: {
    width: Sizes.width(68),
    height: Sizes.height(22),

    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleMore: {
    width: Sizes.width(68),
    height: Sizes.height(10.5),

    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
});
