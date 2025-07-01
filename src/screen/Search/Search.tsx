import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Sizes } from '../../utils/resource/size';
import { useNavigation } from '@react-navigation/native';
import { MainScreenParamList } from '../../utils';
import { AppText } from '../../element/AppText';
import Icon from '../../element/AppIcon/item/Icon';

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
  {
    id: '3',
    title: 'Book 3',
    imageUrl: 'https://picsum.photos/200/300',
    author: 'Author 2',
  },
  {
    id: '4',
    title: 'Book 4',
    imageUrl: 'https://picsum.photos/200/300',
    author: 'Author 2',
  },
  {
    id: '5',
    title: 'Book 5',
    imageUrl: 'https://picsum.photos/200/300',
    author: 'Author 2',
  },
  {
    id: '6',
    title: 'Book 6',
    imageUrl: 'https://picsum.photos/200/300',
    author: 'Author 2',
  },
  {
    id: '7',
    title: 'Book 7',
    imageUrl: 'https://picsum.photos/200/300',
    author: 'Author 2',
  },
  {
    id: '8',
    title: 'Book 8',
    imageUrl: 'https://picsum.photos/200/300',
    author: 'Author 2',
  },
  {
    id: '9',
    title: 'Book 9',
    imageUrl: 'https://picsum.photos/200/300',
    author: 'Author 2',
  },
];

export function Search() {
  const { watch, setValue } = useFormContext();
  const isVisible = watch('modal');
  const { colors } = useAppTheme();
  const closeSearch = () => {
    setValue('modal', false);
    setValue('search', '');
  };
  const navigation = useNavigation<MainScreenParamList<'Book'>['navigation']>();
  const renderItem = ({ item }: { item: BookItem }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => {
        closeSearch();
        navigation.navigate('Book', { id: item.id });
      }}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.bookCover} />
      <AppText text={item.title} styleText={styles.bookTitle} />
      <AppText text={item.author} styleText={styles.authorName} />
    </TouchableOpacity>
  );

  if (isVisible) {
    return (
      <Animated.View
        style={{
          backgroundColor: colors.background,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 130,
        }}
      >
        <Icon
          name="ArrowLeft"
          size={25}
          color={colors.text.primary}
          onpress={closeSearch}
          style={{ marginBottom: 10, alignSelf: 'flex-start', marginLeft: 30 }}
        />
        <FlatList
          data={mockData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          ListFooterComponent={<View style={{ height: 250 }} />}
        />
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    marginTop: Sizes.wpx(50),
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
