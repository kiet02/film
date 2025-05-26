import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { AppText } from '../../element/AppText';
import { Sizes } from '../../utils/resource/size';
import { BookHeader } from './item/BookHeader';
import { BookInfo } from './item/BookInfo';
import { AppAreaView } from '../../element/AppAreaView/AppAreaView';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MainScreenParamList, RootStackScreenProps } from '../../utils';
import { useBook } from './module/useBook';
import { useLoader } from '../../element/AppLoad/LoaderContext';

export function Book() {
  const route = useRoute<MainScreenParamList<'Book'>['route']>();
  const navigation =
    useNavigation<MainScreenParamList<'BookReading'>['navigation']>();

  const { hideLoader, showLoader } = useLoader();
  const { data, isFetching } = useBook(route.params?.id as string | number);
  useEffect(() => {
    if (isFetching) {
      showLoader();
    } else {
      hideLoader();
    }
  });

  const onPress = () => {
    // Navigate to BookReading screen with the book ID
    navigation.navigate('BookReading', {
      id: data?.id,
      BookId: data?.id,
    });
  };

  return (
    <AppAreaView>
      {/* Header */}
      <BookHeader />
      {/* Book Cover and Info */}
      <View style={styles.bookInfo}>
        <Image
          source={{ uri: data?.img || 'https://picsum.photos/200/300' }}
          style={styles.coverImage}
        />
        <AppText text={data?.name} styleText={styles.title} />
        <AppText text={data?.Author?.name} styleText={styles.author} />

        <BookInfo onPress={onPress} />
      </View>

      <View style={styles.descriptionContainer}>
        <AppText text="Description" styleText={styles.descriptionTitle} />
        <AppText
          text={data?.describe || 'No description available.'}
          styleText={styles.descriptionText}
        />
      </View>
    </AppAreaView>
  );
}

const styles = StyleSheet.create({
  bookInfo: {
    alignItems: 'center',
    padding: 16,
  },
  coverImage: {
    width: Sizes.width(40),
    height: Sizes.width(55),
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  author: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  descriptionContainer: {
    padding: 16,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});
