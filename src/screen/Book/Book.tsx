import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { AppText } from '../../element/AppText';
import { Sizes } from '../../utils/resource/size';
import { BookHeader } from './item/BookHeader';
import { BookInfo } from './item/BookInfo';
import { AppAreaView } from '../../element/AppAreaView/AppAreaView';

export function Book() {
  return (
    <AppAreaView>
      {/* Header */}
      <BookHeader />

      {/* Book Cover and Info */}
      <View style={styles.bookInfo}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={styles.coverImage}
        />
        <AppText text="Book Title" styleText={styles.title} />
        <AppText text="Author Name" styleText={styles.author} />

        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            width: Sizes.wpx(350),
            borderRadius: 10,
          }}
        >
          <BookInfo />
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <AppText text="Description" styleText={styles.descriptionTitle} />
        <AppText
          text="Book description goes here..."
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
