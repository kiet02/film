/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Sizes } from '../../../utils/resource/size';
import { AppText } from '../../../element/AppText';
import { Colors } from '../../../utils/resource/color';
import { useExplore } from '../module/useExplore';
import { AppImage } from '../../../element/AppImage/AppImage';
import { useLoader } from '../../../element/AppLoad/LoaderContext';
import { useAppTheme } from '../../../hooks/useAppTheme';

export function ListExplore() {
  const { data } = useExplore();
  const { colors } = useAppTheme();
  const { showLoader, hideLoader } = useLoader();

  const handleLoad = async () => {
    showLoader();
    await new Promise(resolve => setTimeout(resolve, 2000));
    hideLoader();
  };

  return (
    <View style={{ height: Sizes.height(20), marginBottom: Sizes.wpx(20) }}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item?.name.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, { backgroundColor: colors.explore.item }]}
            onPress={handleLoad}
          >
            <AppImage uri={item?.img} styles={styles.image} />
            <View>
              <AppText
                key={'title'}
                styleText={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  maxWidth: Sizes.width(45),
                }}
                text={item?.name}
                numberOfLines={1}
                ellipsizeMode="tail"
              />
              <AppText key={'author'} text={item.Author?.name} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: Sizes.width(80),
    height: Sizes.height(15),

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
