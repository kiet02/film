import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AppText } from '../../element/AppText';
import { Sizes } from '../../utils/resource/size';
import { BookSaveHeader } from './item/BookSaveHeader';
import { useNavigation } from '@react-navigation/native';
import { MainScreenParamList } from '../../utils';
import { Colors } from '../../utils/resource/color';

type BookItem = {
  id: string;
  title: string;
  imageUrl: string;
  author: string;
};

const mockData: BookItem[] = [
  // Add some mock data for testing
  {
    id: '1',
    title: 'Book 1',
    imageUrl: 'https://picsum.photos/200/300',
    author: 'Author 1',
  },
  {
    id: '2',
    title: 'Book 2',
    imageUrl: 'https://picsum.photos/200/300',
    author: 'Author 2',
  },
  // Add more items as needed
];

export default function BookSave() {
  const navigation = useNavigation<MainScreenParamList<'Book'>['navigation']>();

  const renderItem = ({ item }: { item: BookItem }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => navigation.navigate('Book')}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.bookCover} />
      <AppText text={item.title} style={styles.bookTitle} />
      <AppText text={item.author} style={styles.authorName} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <BookSaveHeader name="Book mark" />
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    marginTop: Sizes.wpx(50),
  },
  listContainer: {
    padding: 8,
  },
  row: {
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  bookItem: {
    width: Sizes.width(45),
    marginBottom: 16,
    alignItems: 'center',
  },
  bookCover: {
    width: Sizes.width(40),
    height: Sizes.width(55),
    borderRadius: 8,
    marginBottom: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  authorName: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
