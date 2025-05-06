import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AppText } from '../../element/AppText';
import { Sizes } from '../../utils/resource/size';
import Icon from '../../element/AppButton/AppIcon';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../utils/resource/color';
import { BookHeader } from './item/BookHeader';
import { BookInfo } from './item/BookInfo';

export function Book() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <BookHeader />

      {/* Book Cover and Info */}
      <View style={styles.bookInfo}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={styles.coverImage}
        />
        <AppText text="Book Title" style={styles.title} />
        <AppText text="Author Name" style={styles.author} />

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
        <AppText text="Description" style={styles.descriptionTitle} />
        <AppText
          text="Book description goes here..."
          style={styles.descriptionText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 16,
    backgroundColor: '#000',
    borderRadius: 8,
    overflow: 'hidden',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  actionText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
  divider: {
    width: 1,
    backgroundColor: '#fff',
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
